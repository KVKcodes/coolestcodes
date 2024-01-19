//my code
var instruct = document.getElementsByClassName('instructer');
var opened= false;
var counter=0;

const duration_fast = 1500
const duration_really_fast = 500
const delay_zero = 0


//normal code
var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  smallest: 10,
  small: 12,
  medium: 14
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Table of Contents",
      textAlign: "center",
      delay: delay_zero,
      y: 20,
      x: -30,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    {
      text: "1. Surabhi",
      y: 40,
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    {
      text: "2. Raaga - Music",
      y: 20,
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    {
      text: "3. Nrithya - Dance",
      y: 20,
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    {
      text: "4. Cinicarnival - Film",
      y: 15,
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    {
      text: "5. Chitra Kala - Drawing",
      y: 20,
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small 
    },
    {
      text: "6. Vastra Shaala - Fashion",
      y: 20,
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    {
      text: "7. Sahithya - Literature",
      y: 20,
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Surabhi,",
      textAlign: "middle",
      y: 20,
      x: 50,
      delay: delay_zero,
      duration: duration_really_fast,
      fontSize: fontSize.small,
    },
    {
      text: "An International Level Fest showcasing a wide variety of cultural events. ",
      y: 40,
      x: posX,
      duration: duration_fast,
      fontSize: fontSize.small
    },
    {
      text: "Surabhi will be on 23rd and 24th February 2024.",
      y: 40,
      x: posX,
      duration: duration_fast,
      fontSize: fontSize.small
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);

vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Cinecarnival",
      textAlign: "center",
      delay: delay_zero,
      y: 20,
      x: -30,
      duration: duration_fast,
      fontSize: fontSize.small
    },
    {
      text: "Cinecarnival, where films meet filmmakers.",
      y: 40,
      x: posX,
      duration: duration_fast,
      fontSize: fontSize.small
    },
    {
      text: "It includes producing, editing and showcasing short films.",
      y: 40,
      x: posX,
      duration: duration_fast,
      fontSize: fontSize.small
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);

vara[3] = new Vara(
  "#vara-container4",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Raaga",
      textAlign: "center",
      delay: 0,
      y: 20,
      x: -30,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    {
      text: "Raaga is a musical festival organised by Swara.",
      y: 40,
      x: posX,
      duration: duration_fast
    },
    // {
    //   text: "The music festival consists of various competitions, spot events and expos to celebrate music in different ways.",
    //   y: 20,
    //   x: posX,
    //   duration: duration_fast
    // },
    {
      text: "Seek solace in music!",
      y: 10,
      color: "#3f51b5",
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.smallest

    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);

vara[4] = new Vara(
  "#vara-container5",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Vastra Shaala",
      textAlign: "center",
      delay: 0,
      y: 20,
      x: -30,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
    // {
    //   text: "Raaga is a musical festival organised by Swara.",
    //   y: 40,
    //   x: posX,
    //   duration: duration_fast
    // },
    {
      text: "Vastra Shaala Fashion Fest brings together designers, models, and fashion enthusiasts to showcase the latest trends. ",
      y: 20,
      x: posX,
      duration: duration_fast,
      fontSize: fontSize.small

    },
    // {
    //   text: "It's a dynamic event that encapsulates the essence of creativity and innovation in the ever-evolving world of fashion.",
    //   y: 10,
    //   color: "#3f51b5",
    //   id: "link",
    //   x: posX,
    //   duration: duration_really_fast,
    //   fontSize: fontSize.small

    // }
    
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[5] = new Vara(
  "#vara-container6",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Sahithya",
      textAlign: "center",
      delay: 0,
      y: 20,
      x: -30,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },

    {
      text: "From the creators of KL Horizon magazine, Chai Pe Charcha, Book Fest and literary events in KL, Vachas is back this time with Sahithya.",
      y: 20,
      x: posX,
      duration: duration_fast,
      fontSize: fontSize.small

    },
    {
      text: "For the true connoisseurs of literature.",
      y: 10,
      color: "#3f51b5",
      x: posX,
      duration: duration_really_fast,
      fontSize: fontSize.small
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[6] = new Vara(
  "#vara-container7",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Nrithya",
      textAlign: "center",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "A dance fest for the dance enthusiasts.",
      y: 40,
      x: posX,
      duration: duration_fast
    },
    {
      text: "Have some fun vibing in the events or having dance offs in the competitions.",
      y: 20,
      x: posX,
      duration: duration_fast
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[7] = new Vara(
  "#vara-container8",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Natayaka",
      textAlign: "center",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "Theatre is the reflection of society.",
      y: 40,
      x: posX,
      duration: duration_fast
    },
    {
      text: "From the best drama performances to your best in competitions, Natayaka brings navarasalu into your life.",
      y: 20,
      x: posX,
      duration: duration_fast
    },

  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[8] = new Vara(
  "#vara-container9",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Chitrakala",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small,
    },
    {
      text: "Art is a window to another world.",
      y: 40,
      x: posX,
      duration: duration_fast,
    },
    {
      text: "Express yourself with your paintstrokes and colour surabhi up with your artistic brilliance.",
      y: 20,
      x: posX,
      duration: 3500,
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false,
  }
);
vara[9] = new Vara(
  "#vara-container10",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "",
      textAlign: "center",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "",
      y: 40,
      x: posX,
      duration: duration_fast
    },
    {
      text: "",
      y: 20,
      x: posX,
      duration: duration_fast
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[10] = new Vara(
  "#vara-container11",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "end...",
      textAlign: "center",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small
    },
    {
      text: "",
      y: 40,
      x: posX,
      duration: 4000
    },
    {
      text: "",
      y: 20,
      x: posX,
      duration: 3500
    },

  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);

vara[10].ready(function() {
  
  $(".front:not(.last)").click(function() {
    counter++;
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(".table-contents").addClass("open");
    console.log("Book has been opened")
    instruct.textContent = 'CLICK ON THE NEXT PAGE TO ITERATE THROUGH';
    opened= true;
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
            open = true;
            console.log("The book is now open!");
            console.log(open)
          var group = o.container;
          var rect = vara[10].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".first .back").click(function() {
    $(".table-contents").removeClass("open");
  });
  $(".back").click(function() {
    counter--;
    if (counter==0) {
      instruct.textContent= "CLICK ON THE BOOK TO BEGIN";
    }
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
  $(".wow").click(function () {
    var backElements = document.getElementsByClassName("back");
    var index = backElements.length - 1;

    function performIteration() {
        if (index >= 0) {
            var backElement = backElements[index];
            wower(backElement);
            index--;

            // Call the next iteration after a delay (e.g., 1000 milliseconds or 1 second)
            setTimeout(performIteration, 100);
        }
    }
    // Start the loop
    performIteration();
});
});
console.log(vara)

document.addEventListener('DOMContentLoaded', function() {
  var batteryPercentage; // Declare the variable outside the callback function

  function renderBattery() {
    navigator.getBattery().then(function(battery) {
      // Initial battery level
      console.log('Battery Level:', battery.level * 100 + '%');

      // Update battery level when it changes
      battery.addEventListener('levelchange', function() {
        console.log('Battery Level:', battery.level * 100 + '%');

        // Update the batteryPercentage variable
        batteryPercentage = Number(battery.level * 100);
        console.log('Stored Battery Percentage:', batteryPercentage);

        // Update the displayed percentage
        document.getElementById('batteryPercent').textContent = batteryPercentage;
      });

      // Set the initial battery percentage
      batteryPercentage = Number(battery.level * 100);
      document.getElementById('batteryPercent').textContent = batteryPercentage;
    });
  }

  renderBattery();
});


function wower(element) {
  counter--;
  if (counter == 0) {
    instruct.textContent = "CLICK ON THE BOOK TO BEGIN";
  }
  // setTimeout(removeOpen, 400) you can use this if you want to add some delay for animation change
  removeOpen()
  if (
    $(element)
      .parent(".paper")
      .index() == 0
  )
    $(".book").removeClass("open");
  $(element)
    .parent(".paper")
    .removeClass("open");
}

function removeOpen() {
  $(".table-contents").removeClass("open");
}