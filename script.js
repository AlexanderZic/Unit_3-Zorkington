/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {
  title: "Cafe Zorkington!",
  desc: "Welcome to the world of... here are some quick rules & concepts...",
  author: "Alexander Zic",
  cohort: "SBPT-2023",
  startingRoomDescription:
    "You are in a Coffee Shop where you choose your ingredients from each room. You are in the Barista room where it can all be put together once you are ready! You are handed a bag and told to take a look around...",
  playerCommands: [
    // replace these with your games commands as needed
    "look around",
    "inspect",
    "pickup",
    "go to",
    "check bag",
    "drop",
  ],
  // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference.
  // This shouldn't be more than 6-8 different commands.
};
//.iclude is my friend
// Your code here

let currentRoom = "Barista";
let playerInventory = [];

let cafeRooms = {
  BeanHouse: {
    exits: ["Barista", "MilkStation"],
    description:
      "You are in the coffee bean selection area. Please select one.",
    items: [
      {
        name: "Mocha Beans",
        description:
          "This roast is complex, very earthy and deep, and of course chocolatey.",
        location: "BeanHouse",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Liberica Beans",
        description:
          "This roast is smoky, nutty, floral with hints of dark chocolate, ripe berry and spice.",
        location: "BeanHouse",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Mundo Novo Beans",
        description:
          "This is a dark roast, medium-bodied coffee with crisp, woody, and nutty undertones.",
        location: "BeanHouse",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Coffe Bean Tree",
        description: "Here you see a fake tree showing what it looks like it is ready to be harvested.",
        location: "BeanHouse",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        movable: false
      },
    ],
  },
  MilkStation: {
    exits: ["Barista", "BeanHouse", "SugarCorner"],
    description: "Welcome to the milk selection area. Please select one.",
    items: [
      {
        name: "Oat Milk",
        description:
          "This is plant milk derived from whole oat with a creamy texture and mild oatmeal-like flavor.",
        location: "MilkStation",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Whole Milk",
        description:
          "This is produced and pasturized from a cow, and has a rich and creamy flavor with a hint of sweetness.",
        location: "MilkStation",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Coconut Milk",
        description:
          "This milk delivers the aroma and nuttiness of tropical fruit, with a sweet and a prominent taste of coconut.",
        location: "MilkStation",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Milk Fountain",
        description: "It is large fountain of a milk carton at the ceiling pouring milk into a large coffee cup. A sign is nearby thast says: DO NOT TOUCH",
        location: "SugarCorner",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        movable: false
      },
    ],
  },
  SugarCorner: {
    exits: ["Barista", "MilkStation"],
    description: "You've entered the sugar selection area. Please select one.",
    items: [
      {
        name: "Raw Sugar",
        description: "This sugar has a delicate molasses taste and aroma.",
        location: "SugarCorner",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "White Sugar",
        description:
          "This sugar has a pure sweetness, offering a clean and straightforward taste.",
        location: "SugarCorner",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Brown Sugar",
        description:
          "This sugar has a deep, caramel or toffee-like flavor due to the added molasses.",
        location: "SugarCorner",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Giant Statue",
        description: "It is large statue of a white sugar cube statue tilted on its side.",
        location: "SugarCorner",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        movable: false
      },
    ],
  },
  Barista: {
    exits: ["BeanHouse", "MilkStation", "SugarCorner"],
    description: "We can put your coffee together for you here.",
    items: [
      {
        name: "Stickers",
        description: "A fun cartoon logo of CafeZorkington that you can take!",
        location: "Barista",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Business Cards",
        description:
          "Book us for your next event! Contact us at CafeZorkington@askjeeves.com",
        location: "Barista",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        }, 
        movable: true
      },
      {
        name: "Napkins",
        description: "A square of paper tissue used for cleaning.",
        location: "Barista",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        pickUp: function () {
          return `You pick up the ${this.name}.`;
        },
        movable: true
      },
      {
        name: "Coffee Machine",
        description: "A large expensive looking coffee machine.",
        location: "Barista",
        inspect: function () {
          return `You closely examine the ${this.name}. ${this.description}`;
        },
        movable: false
      },
    ],
  },
};


export const domDisplay = (playerInput) => {
  /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */
  // Your code here

  function enterRoom(newRoom) {
    let validTransitions = cafeRooms[currentRoom].exits;
    if (validTransitions.includes(newRoom)) {
      currentRoom = newRoom;
      console.log(cafeRooms[currentRoom].description);
      console.log(currentRoom);
    } else {
      throw `You can't move between these rooms: ${currentRoom} to ${newRoom}`;
    }
  }

  function displayInventory() {
    if (playerInventory.length === 0) {
      return "Your bag is empty.";
    } else {
      const inventoryList = playerInventory.map((item) => item.name).join(", ");
      console.log("Inside displayInventory:", inventoryList);
      return `Your bag: ${inventoryList}`;
    }
  }

  if (playerInput.startsWith("check bag")) {
    return displayInventory();
  }

    function pickupItem(itemName) {
        let roomItemIndex = cafeRooms[currentRoom].items.findIndex(item => item.name.toLowerCase() === itemName);
    
        if (roomItemIndex !== -1) {
            let item = cafeRooms[currentRoom].items[roomItemIndex];
    
            if (item.movable) {
                cafeRooms[currentRoom].items.splice(roomItemIndex, 1);
                playerInventory.push(item);
                console.log(`You pick up the ${item.name}.`);
                return `You pick up the ${item.name}.`;
            } else {
                console.log(`You can't pick up the ${item.name}.`);
                return `You can't pick up the ${item.name}.`;
            }
        } else {
            console.log(`There is no ${itemName} here.`);
            return `There is no ${itemName} here.`;
        }
    }
    

  if (playerInput.startsWith("pickup")) {
    let itemName = playerInput.slice(7).trim().toLowerCase();
    return pickupItem(itemName);
  }

  if (playerInput.startsWith("drop")) {
    let itemName = playerInput.slice(5).trim().toLowerCase();
    return dropItem(itemName);
  }

  function dropItem(itemName) {
    let itemIndex = playerInventory.findIndex(
      (item) => item.name.toLowerCase() === itemName
    );
    if (itemIndex !== -1) {
      let item = playerInventory.splice(itemIndex, 1)[0];
      cafeRooms[currentRoom].items.push(item);
      console.log(`You drop the ${item.name} in the ${currentRoom}.`);
      return `You drop the ${item.name} in the ${currentRoom}.`;
    } else {
      console.log(`There is no ${itemName} in your inventory.`);
      return `There is no ${itemName} in your inventory.`;
    }
  }

  if (playerInput.startsWith("look around")) {
    console.log(cafeRooms[currentRoom].description);
    console.log(cafeRooms[currentRoom].exits);
    console.log(cafeRooms[currentRoom].items);
    console.log(currentRoom);

    const itemsList = cafeRooms[currentRoom].items
      .map((item) => item.name)
      .join(", ");
    const exitsList = cafeRooms[currentRoom].exits.join(", ");
    const roomInfo = `You are in the ${currentRoom} room, you can see: ${itemsList}. ${cafeRooms[currentRoom].description} Please visit all the rooms and pick out what you would like in your coffee! 
        From here you can see the ${exitsList}.`;
    return roomInfo;

  } else if (playerInput.startsWith("inspect")) {
    let itemName = playerInput.slice(8).trim().toLowerCase();
    let item = cafeRooms[currentRoom].items.find(
      (item) => item.name.toLowerCase() === itemName
    );
    if (item) {
      console.log(item.inspect());
      return item.inspect();
    } else {
      console.log(`There is no ${itemName} here.`);
      return `There is no ${itemName} here.`;
    }
  } else if (playerInput.startsWith("go to")) {
    let roomName = playerInput.slice(6).trim();
    if (cafeRooms[currentRoom].exits.includes(roomName)) {
      enterRoom(roomName);
      return `You are now in the ${currentRoom} room.`;
    } else {
      console.log(`You can't go to ${roomName} from here.`);
      return `You can't go to ${roomName} from here.`;
    }
  } else {
    console.log(`I don't know how to "${playerInput}".`);
    return `I don't know how to "${playerInput}".`;
  }
};
