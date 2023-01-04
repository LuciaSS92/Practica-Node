// To initialize database with minimum requirements

// To load readline
const readline = require("readline");
// To load models
const Ad = require("./models/Ad");

// To load database
async function main() {
  
  // Asking security question
  const advance = await securityYN(
    "Are you sure you want to delete existing database? (y/n) "  );
  if (!advance) {
    process.exit();
  }

  // Connecting to DB
  const connection = require("./lib/connectMongoose");

  // Initializing ad collection
  await initAds();

  // Disconnecting from DB
  connection.close();
}

main().catch((err) => console.log("Found error", err));

async function initAds() {
  // To delete all elements from the ad collection
  const result = await Ad.deleteMany();
  console.log(`${result.deletedCount} ads deleted.`);

  // To create some initial ads
  const inserted = await Ad.insertMany([
    {
      name: "Bicicleta",
      sale: true,
      price: 230.15,
      photo: "/images/bicicleta.png",
      tags: ["lifestyle", "motor"],
    },
    {
      name: "iPhone 3GS",
      sale: false,
      price: 50.0,
      photo: "/images/iphone.png",
      tags: ["lifestyle", "mobile"],
    },
  ]);
  console.log(`${inserted.length} ads created.`);
}


// Security question
function securityYN(text) {
  return new Promise((resolve, reject) => {
    const interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    interface.question(text, (answer) => {
      interface.close();
      if (answer.toLowerCase() === "y") {
        resolve(true);
        return;
      }
      resolve(false);
    });
  });
}
