import listOfClothes from "./listOfClothes";
import React from "react";

export default function Captions() {
  //Test Captions
  const captions = [
    "embroidered white dress\nsize s-m\nlength 31”699/-",
    // "~prettiest floral dress~(Super chic and pretty) Price:689 (free shipping)Size: XS-SModel’s height for reference:5’6Waist:upto 25.5Bust:upto 34",
    // "Black top Size - medium Price - 320/- + shipping",
    // "1) Orange crop: SOLD ₹7502) f21 gingham top: ₹650Dimensions (in inches)Bust: 30-34Length: 19",
    // "Christain Louboutin High Tops Green Snakeskin Shoes 👞Size: Indian (41)/ 27cmsPrice: 18,000/-Available on www.bombayclosetcleanse.in",
    // "Price- 850 inc. Shipping (each)1. Black shimmer bow bustier2. Brown corset 🤎- SOLD3. Black bow corset4. Leather corsetDm/comment to buy",
    // "Satin dress Available ✅Size: Free size upto bust 36Price: ₹980 free shippingDm to order💌",
    // "ASOS crochet dressSize-medium SOLD OUT",
    // "Beautiful floral print maxi dress (refer next slide for clear detailed pics )SIZE-medium to largePrice-899+100 shipping",
    // "MULTICOLOUR FLORAL PRINT SHIRTSOLD ❌(in)LENGTH : 28BUST : 46SHOULDER : 5.5SLEEVES : 20 ",
    // "CHECK SHIRT(in)CHEST: 40SHOULDER: 6SLEEVES: 25LENGTH: 28SIZE: L PRICE:300 ",
    // "F21 Alien bodysuit💚Size-SPrice-299+🚚",
    // "Brand New Solid Men Faded Tee₹450Size - XL (Freesize)Free Shipping All Over IndiaDM TO BUY",
    // "Baseball  shirtSize:XLShoulder: 20inchChest: 46inchLength:28inchCondition: 10/10Price: INR 550 + Free shipping",
    // "White Cotton ShirtBust: 45.5”Length: 29”Shoulders: 18Price: 450/- free shipping(For size reference model is size medium)",
    // "doosan bearschest: 49length: 26condition: 10/10, dry cleanedprice: 2000rs + shipping",
    // "SOLDPurple EnglewoodSuper Rare and super cleanchest 46length 24in amazing condition and quilted on the insideslight discoloration next to middle button barely visibleprice-2000",
  ];

  captions.forEach((caption) => {
    //To remove all commas because price can be as 18,000 and lower case becasue obviously makes job easier
    // console.log(caption);

    //VVV IMPORTANT NEEDS TO BE THERE FOR SOME REASON NO LETTING ANDROID EMULATOR RUN!!!!!
    // caption = caption.toLowerCase().replaceAll(",", "");

    // To check if price is there and to check if is not sold
    if (
      (caption.includes("price") ||
        caption.includes("inr") ||
        caption.includes("₹")) &&
      !caption.includes("sold")
    ) {
      // list is to get the number right after the item of list because sometimes price may not be the first number in the caption,
      const list = ["price", "₹", "inr"];
      var i = -1;
      for (let str of list) {
        i = caption.indexOf(str);
        if (i != -1) {
          break;
        }
      }

      var matches = caption.slice(i).match(/(\d+)/); //slicing from the position of the list and no clue what match does (stackoverflow helped)
      if (matches) {
        console.log(matches[0]);
        //matches is an array for some reason we need the first number.
      }
    }

    listOfClothes.forEach((item) => {
      var name = "";
      if (caption.includes(item)) {
        name = item;
        console.log("name", name);
      }
    });

    //For Size
    if (
      caption.includes("size") ||
      caption.includes("inches") ||
      caption.includes("bust") ||
      caption.includes("width")
    ) {
      // list is to get the number right after the item of list because sometimes price may not be the first number in the caption,
      const list = ["size", "inches", "bust", "width"];
      var i = -1;
      for (let str of list) {
        i = caption.indexOf(str);
        if (i != -1) {
          break;
        }
      }
      var forSizeStr = caption.slice(i);

      if (
        forSizeStr.includes("s") ||
        forSizeStr.includes("m") ||
        forSizeStr.includes("l") ||
        forSizeStr.includes("xl") ||
        forSizeStr.includes("xxl") ||
        forSizeStr.includes("xs")
      ) {
        const list2 = ["s", "m", "l"];
        var j = -1;
        for (let str of list2) {
          j = forSizeStr.indexOf(str);
          if (j != -1) {
            break;
          }
        }

        console.log("size2==", forSizeStr[j]);
      }

      var matches = caption.slice(i).match(/(\d+)/); //slicing from the position of the list and no clue what match does (stackoverflow helped)
      if (matches) {
        console.log("size==", matches[0]);
        //matches is an array for some reason we need the first number.
      }
    }
  });

  return;
}
