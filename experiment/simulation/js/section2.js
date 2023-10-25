document.addEventListener("DOMContentLoaded", function () {
    // Select all line elements by their IDs and change their visibility
    var whiteLine = document.getElementById("white");
    var greenLineLeft = document.getElementById("greenL");
    var greenLineRight = document.getElementById("greenR");
    var yellowLineLeft = document.getElementById("yellowL");
    var yellowLineRight = document.getElementById("yellowR");
    var violetLineLeft = document.getElementById("violetL");
    var violetLineRight = document.getElementById("violetR");
    document.getElementById("white").style.visibility = "hidden";
    document.getElementById("greenL").style.visibility = "hidden";
    document.getElementById("greenR").style.visibility = "hidden";
    document.getElementById("violetL").style.visibility = "hidden";
    document.getElementById("violetR").style.visibility = "hidden";
    document.getElementById("yellowL").style.visibility = "hidden";
    document.getElementById("yellowR").style.visibility = "hidden";
    document.getElementById("lightSource").style.visibility = "hidden";
    document.getElementById("grating").style.visibility = "hidden";
    const slider = document.getElementById("blur-slider2");
    const span = document.getElementById("slider-value2");
  
    slider.addEventListener("input", function () {
      const blurValue = this.value;
  
      if (blurValue < -2) {
        // Apply a blur filter with increasing intensity as the slider value decreases
        const blurIntensity = Math.abs(blurValue * 2);
        whiteLine.style.filter = `blur(${blurIntensity}px)`;
        greenLineLeft.style.filter = `blur(${blurIntensity}px)`;
        violetLineLeft.style.filter = `blur(${blurIntensity}px)`;
        yellowLineLeft.style.filter = `blur(${blurIntensity}px)`;
        greenLineRight.style.filter = `blur(${blurIntensity}px)`;
        violetLineRight.style.filter = `blur(${blurIntensity}px)`;
        yellowLineRight.style.filter = `blur(${blurIntensity}px)`;
      } else if (blurValue >= -2 && blurValue <= 2) {
        // Clear the filter
        whiteLine.style.filter = "none";
        greenLine.style.filter = "none";
        violetLine.style.filter = "none";
        yellowLine.style.filter = "none";
      } else {
        // Apply a blur filter with increasing intensity as the slider value increases
        const blurIntensity = Math.abs(blurValue * 2);
        whiteLine.style.filter = `blur(${blurIntensity}px)`;
        greenLineLeft.style.filter = `blur(${blurIntensity}px)`;
        violetLineLeft.style.filter = `blur(${blurIntensity}px)`;
        yellowLineLeft.style.filter = `blur(${blurIntensity}px)`;
        greenLineRight.style.filter = `blur(${blurIntensity}px)`;
        violetLineRight.style.filter = `blur(${blurIntensity}px)`;
        yellowLineRight.style.filter = `blur(${blurIntensity}px)`;
      }
  
      // Update the text span with the current blur value
      span.textContent = blurValue;
    });
  
    let lightSourceVisible = false;
    let gratingVisible = false;
    let whiteVisible = false;
  
    const switchOnLightButton = document.getElementById("SwitchOnLight");
    const placeGratingButton = document.getElementById("PlaceGrating");
  
    function updateButtonLabels() {
      switchOnLightButton.textContent = lightSourceVisible
        ? "Switch Off Light"
        : "Switch On Light";
      placeGratingButton.textContent = gratingVisible
        ? "Remove Grating"
        : "Place Grating";
    }
  
    updateButtonLabels();
  
    // Add event listeners to the buttons
    switchOnLightButton.addEventListener("click", function () {
      // Toggle the visibility of "lightSource" element
      lightSourceVisible = !lightSourceVisible;
      const lightSource = document.getElementById("lightSource");
      lightSource.style.visibility = lightSourceVisible ? "visible" : "hidden";
  
      // Toggle the visibility of "white" element based on button states
      if (lightSourceVisible && !gratingVisible) {
        whiteVisible = true;
        document.getElementById("white").style.visibility = "visible";
      } else {
        whiteVisible = false;
        document.getElementById("white").style.visibility = "hidden";
      }
  
      updateButtonLabels();
    });
  
    placeGratingButton.addEventListener("click", function () {
      // Toggle the visibility of "grating" element
      gratingVisible = !gratingVisible;
      const grating = document.getElementById("grating");
      grating.style.visibility = gratingVisible ? "visible" : "hidden";
  
      // Toggle the visibility of "white" element based on button states
      if (lightSourceVisible && !gratingVisible) {
        whiteVisible = true;
        document.getElementById("white").style.visibility = "visible";
      } else {
        whiteVisible = false;
        document.getElementById("white").style.visibility = "hidden";
      }
  
      updateButtonLabels();
    });
  
    // const slide3 = document.getElementById('blur-slider3');
    // const image = document.getElementById('telescope-image');
  
    // slide3.addEventListener('input', function() {
    //     const rotateValue = this.value;
    //     console.log(rotateValue)
    //     // Calculate the rotation angle based on the slider value
    //     const rotateAngle = rotateValue * 10; // Adjust the multiplier for the desired rotation range
  
    //     // Apply the rotation transformation around the center
    //     image.setAttribute('transform', `rotate(${rotateAngle}, 293.7423, 1109.735)`);
    // });
  
  
    const ExperimentData={
      "0":{
        "v1":{
            "MS":0,
            "VS":0
        },
        "v2":{
            "MS":0,
            "VS":0
        },
        "color":"Blank"
     } ,
    "-1":{
        "v1":{
            "MS":275.5,
            "VS":13
        },
        "v2":{
            "MS":95,
            "VS":9
        },
        "color":"yellowL"
        },
     "-2":{
        "v1":{
            "MS":276.5,
            "VS":2
        },
        "v2":{
            "MS":96.5,
            "VS":40
        },
        "color":"greenL"
        },
    "-3":{
        "v1":{
            "MS":280,
            "VS":26
        },
        "v2":{
            "MS":100,
            "VS":17
        },
        "color":"violetL"
        },
    "-4":{
        "v1":{
            "MS":296,
            "VS":3
        },
        "v2":{
            "MS":116,
            "VS":4
        },
        "color":"violetL"
        },
    "-5":{
        "v1":{
            "MS":298,
            "VS":5
        },
        "v2":{
            "MS":116.5,
            "VS":24
        },
        "color":"violetL"
     } ,
    "-6":{
        "v1":{
            "MS":299,
            "VS":6
        },
        "v2":{
            "MS":117,
            "VS":14
        },
        "color":"Blank"
     } ,
    "-7":{
        "v1":{
            "MS":300,
            "VS":5
        },
        "v2":{
            "MS":120,
            "VS":5
        },
        "color":"greenL"
     } ,
    "-8":{
        "v1":{
            "MS":301,
            "VS":29
        },
        "v2":{
            "MS":121,
            "VS":5
        },
        "color":"yellowL"
     } ,
    "-9":{
        "v1":{
            "MS":302,
            "VS":2
        },
        "v2":{
            "MS":121.3,
            "VS":31
        },
        "color":"yellowL"
     } ,
    "-10":{
        "v1":{
            "MS":303,
            "VS":13
        },
        "v2":{
            "MS":121.8,
            "VS":5
        },
        "color":"yellowL"
     } ,
    "-11":{
        "v1":{
            "MS":304,
            "VS":6
        },
        "v2":{
            "MS":122,
            "VS":17
        },
        "color":"yellowL"
     } ,
    "-12":{
        "v1":{
            "MS":305,
            "VS":29
        },
        "v2":{
            "MS":123,
            "VS":24
        },
        "color":"Blank"
     } ,
    "-13":{
        "v1":{
            "MS":306,
            "VS":18
        },
        "v2":{
            "MS":124,
            "VS":28
        },
        "color":"Blank"
     } ,
    "-14":{
        "v1":{
            "MS":307,
            "VS":5
        },
        "v2":{
            "MS":127,
            "VS":25
        },
        "color":"Blank"
     } ,
    "-15":{
        "v1":{
            "MS":308,
            "VS":3
        },
        "v2":{
            "MS":128,
            "VS":31
        },
        "color":"violetL"
     } ,
    "-16":{
        "v1":{
            "MS":309,
            "VS":3
        },
        "v2":{
            "MS":129,
            "VS":6
        },
        "color":"violetL"
     } ,
    "-17":{
        "v1":{
            "MS":317,
            "VS":3
        },
        "v2":{
            "MS":137,
            "VS":29
        },
        "color":"Blank"
     } ,
    "-18":{
        "v1":{
            "MS":318,
            "VS":3
        },
        "v2":{
            "MS":138,
            "VS":3
        },
        "color":"greenL"
     } ,
    "-19":{
        "v1":{
            "MS":319,
            "VS":3
        },
        "v2":{
            "MS":138.5,
            "VS":15
        },
        "color":"greenL"
     } ,
     "-20":{
         "v1":{
             "MS":320,
            "VS":3
        },
        "v2":{
            "MS":139,
            "VS":6
        },
        "color":"Blank"
    } ,
    "-21":{
        "v1":{
            "MS":321,
            "VS":5
        },
        "v2":{
            "MS":141,
            "VS":4
        },
        "color":"yellowL"
     } ,
    "-22":{
        "v1":{
            "MS":322,
            "VS":23
        },
        "v2":{
            "MS":142,
            "VS":14
        },
        "color":"yellowL"
    } ,
    "-23":{
        "v1":{
            "MS":323,
            "VS":4
        },
        "v2":{
            "MS":143,
            "VS":5
        },
        "color":"yellowL"
    } ,    
    "-24":{
        "v1":{
            "MS":324,
            "VS":20
        },
        "v2":{
            "MS":144,
            "VS":32
        },
        "color":"Blank"
      },
      "1":{
          "v1":{
              "MS":242,
              "VS":5
          },
          "v2":{
              "MS":66,
              "VS":2
          },
          "color":"yellowR"
          },
       "2":{
          "v1":{
              "MS":243,
              "VS":5
          },
          "v2":{
              "MS":67,
              "VS":4
          },
          "color":"yellowR"
          },
      "3":{
          "v1":{
              "MS":244,
              "VS":5
          },
          "v2":{
              "MS":68,
              "VS":3
          },
          "color":"yellowR"
          },
      "4":{
          "v1":{
              "MS":245,
              "VS":6
          },
          "v2":{
              "MS":69,
              "VS":2
          },
          "color":"yellowR"
          },
      "5":{
          "v1":{
              "MS":247,
              "VS":3
          },
          "v2":{
              "MS":69.2,
              "VS":4
          },
          "color":"greenR"
       } ,
      "6":{
          "v1":{
              "MS":248,
              "VS":3
          },
          "v2":{
              "MS":69.5,
              "VS":2
          },
          "color":"greenR"
       },
      "7":{
              "v1":{
                  "MS":249,
                  "VS":3
              },
              "v2":{
                  "MS":70,
                  "VS":3
              },
              "color":"greenR"
          },
      "8":{
              "v1":{
                  "MS":250,
                  "VS":3
              },
              "v2":{
                  "MS":70.5,
                  "VS":5
              },
              "color":"greenR"
          },
      "9":{
              "v1":{
                  "MS":251,
                  "VS":1
              },
              "v2":{
                  "MS":71,
                  "VS":3
              },
              "color":"greenR"
          },
      "10":{
              "v1":{
                  "MS":252,
                  "VS":3
              },
              "v2":{
                  "MS":72,
                  "VS":1
              },
              "color":"Green"
          },
      "11":{
              "v1":{
                  "MS":253,
                  "VS":3
              },
              "v2":{
                  "MS":73,
                  "VS":4
              },
              "color":"Blank"
          },
      "12":{
              "v1":{
                  "MS":254,
                  "VS":3
              },
              "v2":{
                  "MS":74,
                  "VS":5
              },
              "color":"Blank"
          },
      "13":{
              "v1":{
                  "MS":256,
                  "VS":3
              },
              "v2":{
                  "MS":75,
                  "VS":2
              },
              "color":"violetR"
          },
      "14":{
              "v1":{
                  "MS":257,
                  "VS":3
              },
              "v2":{
                  "MS":76,
                  "VS":3
              },
              "color":"violetR"
          },
      "15":{
              "v1":{
                  "MS":258,
                  "VS":3
              },
              "v2":{
                  "MS":78,
                  "VS":4
              },
              "color":"violetR"
          },
      "16":{
              "v1":{
                  "MS":259,
                  "VS":4
              },
              "v2":{
                  "MS":79,
                  "VS":3
              },
              "color":"Blank"
          },
      "17":{
              "v1":{
                  "MS":260,
                  "VS":3
              },
              "v2":{
                  "MS":80,
                  "VS":4
              },
              "color":"Blank"
          },
      "18":{
              "v1":{
                  "MS":261,
                  "VS":5
              },
              "v2":{
                  "MS":82,
                  "VS":5
              },
              "color":"Blank"
          },
      "19":{
              "v1":{
                  "MS":262,
                  "VS":1
              },
              "v2":{
                  "MS":83,
                  "VS":2
              },
              "color":"Blank"
          },
      "20":{
              "v1":{
                  "MS":263,
                  "VS":5
              },
              "v2":{
                  "MS":84,
                  "VS":4
              },
              "color":"Blank"
          },
      "21":{
              "v1":{
                  "MS":264,
                  "VS":2
              },
              "v2":{
                  "MS":85,
                  "VS":3
              },
              "color":"Blank"
          },
      "22":{
              "v1":{
                  "MS":265,
                  "VS":4
              },
              "v2":{
                  "MS":86,
                  "VS":4
              },
              "color":"yellowR"
          },
      "23":{
              "v1":{
                  "MS":266,
                  "VS":3
              },
              "v2":{
                  "MS":87,
                  "VS":6
              },
              "color":"yellowR"
          },
      "24":{
              "v1":{
                  "MS":267,
                  "VS":2
              },
              "v2":{
                  "MS":88,
                  "VS":5
              },
              "color":"yellowR"
          },
      "25":{
              "v1":{
                  "MS":269,
                  "VS":3
              },
              "v2":{
                  "MS":89,
                  "VS":2
              },
              "color":"greenR"
          },
      "26":{
              "v1":{
                  "MS":270,
                  "VS":6
              },
              "v2":{
                  "MS":90,
                  "VS":3
              },
              "color":"violetR"
          },
      "27":{
              "v1":{
                  "MS":271,
                  "VS":5
              },
              "v2":{
                  "MS":91,
                  "VS":4
              },
              "color":"violetR"
          },
      "28":{
              "v1":{
                  "MS":272,
                  "VS":4
              },
              "v2":{
                  "MS":92,
                  "VS":3
              },
              "color":"violetR"
          },
      "29":{
              "v1":{
                  "MS":273,
                  "VS":4
              },
              "v2":{
                  "MS":93,
                  "VS":4
              },
              "color":"violetR"
          }
  
      }  
    const slider3 = document.getElementById("blur-slider3");
    const image = document.getElementById("telescope-image");
    const span3 = document.getElementById("slider-value3");
    const vernier2ms=document.getElementById("vernier2(ms)");
    const vernier2vs=document.getElementById("vernier2(vs)");
    const vernier1ms=document.getElementById("vernier1(ms)");
    const vernier1vs=document.getElementById("vernier1(vs)");
    let alertcount=0
    slider3.addEventListener("input", function () {
      if (lightSourceVisible && gratingVisible){
      const blurValue3 = this.value;
      span3.textContent = blurValue3;
      const data=ExperimentData[blurValue3];
      const v1=data.v1;
      const v1ms=v1.MS;
      const v1vs=v1.VS;
      const v2=data.v2;
      const v2ms=v2.MS;
      const v2vs=v2.VS;
      const color=data.color;
      vernier1ms.textContent=v1ms;
      vernier1vs.textContent=v1vs;
      vernier2ms.textContent=v2ms;
      vernier2vs.textContent=v2vs;
      displayElement(color);
      // create a function to display the element with name as of color, and hide all other elements
      function displayElement(elementName){
        if (elementName=="Blank"){
          const elementNames=["yellowL","yellowR","greenL","greenR","violetL","violetR",];
        elementNames.forEach(element => {
          {
            document.getElementById(element).style.visibility = "hidden";
          }
        });
          return;
        }
        document.getElementById(elementName).style.visibility = "visible";
        const elementNames=["yellowL","yellowR","greenL","greenR","violetL","violetR","white"];
        elementNames.forEach(element => {
          if(element!=elementName){
            document.getElementById(element).style.visibility = "hidden";
          }
        });
      }
        const rotateValue = this.value;
        const rotateAngle = -1*(rotateValue * 2); // Adjust the multiplier for the desired rotation range
    
        // Create a new transformation matrix with the desired rotation point
        const centerX =900; // Adjust this value for your desired X coordinate
        const centerY = 150; // Adjust this value for your desired Y coordinate
        const matrix = `matrix(0.5031 -0.5002 0.4086 0.4109 330.7423 1109.735) rotate(${rotateAngle} ${centerX} ${centerY})`;
    
        // Apply the new matrix
        image.setAttribute("transform", matrix);
    }
    else{
  
      // hide the color lines
      const elementNames=["yellowL","yellowR","greenL","greenR","violetL","violetR",];
        elementNames.forEach(element => {
          {
            document.getElementById(element).style.visibility = "hidden";
            span3.textContent = 0;
          }
        });
        // alert should be displayed only once
        // let alertcount=0
        // if (lightSourceVisible==false && alertcount==0) {
        //   alert("Please switch on the light source");
        //   alertcount=1
        // }
        // else{
        //   alert("Please place the grating");
        //   alertcount=1
        // }
  
    }
    });
    
    
  });
  