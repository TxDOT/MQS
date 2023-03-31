function makeClippedLineStrings(myRoadwayQueryResults, myPrjAttributes) {
  //// multiple results are orderByFields=BEGIN_DFO

  var theFrom = roundToDecimalPlace(myPrjAttributes.BDFO, 3);
  var theTo = roundToDecimalPlace(myPrjAttributes.EDFO, 3);

  //// this targets the last (if > 1) feature returned by the roadway query (has highest BDFO)
  let maxFeatureM = roundToDecimalPlace(myRoadwayQueryResults.features.last().geometry.paths[0].last()[2], 3);

  //// Checking END_DFO against Max Feature M value
  if (theTo > maxFeatureM) { theTo = maxFeatureM; }
  //if (theTo > maxFeatureM) {    alert("End DFO reduced to Max Road DFO (" + theTo + ") for project " + myPrjAttributes.RTE_NM);  }


  //vertex numbers
  var returnedFeatureGeom = [];
  for (var aFeature = 0; aFeature < myRoadwayQueryResults.features.length; aFeature++) {
    let returnedLineStrings = makeLineString(myRoadwayQueryResults.features[aFeature], theFrom, theTo);
    returnedFeatureGeom = returnedFeatureGeom.concat(returnedLineStrings);
  }

  //Clipping to desired From and To
  let clippedLine = clipLineToMinMaxDfo(returnedFeatureGeom, theFrom, theTo);
  let flatClippedLine = clippedLine.flat();
  return flatClippedLine;
}


function makeLineString(feature, myFrom, myTo) {
  let returnedLineStrings = [];
  let returnedLineString = [];
  let vertexNumbers = setVertexNumbers(feature, myFrom, myTo);
  if (!(vertexNumbers.vertexBeginNumber == vertexNumbers.vertexEndNumber)) {
    for (var vertex = vertexNumbers.vertexBeginNumber; vertex <= vertexNumbers.vertexEndNumber; vertex++) {
      returnedLineString.push(feature.geometry.paths[0][vertex]);
    }
    returnedLineStrings.push(returnedLineString);
  }
  return returnedLineStrings;
}



/**
 * 
 * @param {*} feature 
 * @param {*} myFrom 
 * @param {*} myTo 
 * @returns an object with beginning and ending vertex numbers
 */
function setVertexNumbers(feature, myFrom, myTo) {
  //returnedFeatureGeomPart = [];
  var vertexBeginNumber = 0;
  var vertexEndNumber = 0;

  //Check Event M's vs. Feature M's 
  var minFeatureM = roundToDecimalPlace(feature.geometry.paths[0][0][2], 3);
  var maxFeatureM = roundToDecimalPlace(feature.geometry.paths[0].last()[2], 3);

  //Take the whole thing
  if (myFrom <= minFeatureM && myTo >= maxFeatureM) {
    vertexBeginNumber = 0;
    vertexEndNumber = feature.geometry.paths[0].length - 1;
  }

  //If the From value is only on this segment
  if (myFrom >= minFeatureM && myFrom <= maxFeatureM && myTo > maxFeatureM) {
    vertexBeginNumber = 0;
    vertexEndNumber = feature.geometry.paths[0].length - 1;

    for (var j = 1; j < feature.geometry.paths[0].length; j++) {
      prevCoordM = roundToDecimalPlace(feature.geometry.paths[0][j - 1][2], 3);
      curCoordM = roundToDecimalPlace(feature.geometry.paths[0][j][2], 3);

      if (myFrom >= prevCoordM && myFrom <= curCoordM) {
        vertexBeginNumber = j - 1;
      }
    }
  }

  //Find the middle
  if (myFrom >= minFeatureM && myTo <= maxFeatureM) {
    for (var j = 1; j < feature.geometry.paths[0].length; j++) {
      prevCoordM = roundToDecimalPlace(feature.geometry.paths[0][j - 1][2], 3);
      curCoordM = roundToDecimalPlace(feature.geometry.paths[0][j][2], 3);

      if (myFrom >= prevCoordM && myFrom <= curCoordM) {
        vertexBeginNumber = j - 1;
      }

      if (myTo >= prevCoordM && myTo <= curCoordM) {
        vertexEndNumber = j;
      }
    }
  }

  //If the To value is only on this segment
  if (myTo >= minFeatureM && myTo <= maxFeatureM && myFrom < minFeatureM) {
    vertexBeginNumber = 0;
    for (var j = 1; j < feature.geometry.paths[0].length; j++) {
      prevCoordM = roundToDecimalPlace(feature.geometry.paths[0][j - 1][2], 3);
      curCoordM = roundToDecimalPlace(feature.geometry.paths[0][j][2], 3);

      if (myTo >= prevCoordM && myTo <= curCoordM) {
        vertexEndNumber = j;
      }
    }
  }

  var vertexNumbers = JSON.parse(`{"vertexBeginNumber": ${vertexBeginNumber}, "vertexEndNumber": ${vertexEndNumber}}`);
  return vertexNumbers;
}


/**
 * 
 * @param {*} myReturnedFeatureGeom 
 * @param {*} myFrom beginning M measure
 * @param {*} myTo ending M measure
 * @param {*} myPrjAttributes 
 * @returns a feature collection
 */
function clipLineToMinMaxDfo(myReturnedFeatureGeom, myFrom, myTo) {
  if (GLOBALSETTINGS.PrintIterations == 1) {
    console.log("clipFromToAndMakeGeoJson myReturnedFeatureGeom.length : " + myReturnedFeatureGeom.length);
  }

  //Clipping to desired From
  var newBeginPoint = [];
  Array.prototype.push.apply(newBeginPoint, locatePointOnLine(myReturnedFeatureGeom[0], myFrom));
  newBeginPoint.push(myFrom);
  myReturnedFeatureGeom[0].shift();
  myReturnedFeatureGeom[0].unshift(newBeginPoint);


  //Clipping to desired To
  var newEndPoint = [];
  Array.prototype.push.apply(newEndPoint, locatePointOnLine(myReturnedFeatureGeom.last(), myTo));
  newEndPoint.push(myTo);
  myReturnedFeatureGeom.last().pop();
  myReturnedFeatureGeom.last().push(newEndPoint);

  //console.log(myReturnedFeatureGeom);
  return myReturnedFeatureGeom;
}



/**
 * 
 * @param {*} theLine  The Line with Geometry
 * @param {*} pointMeasure Desired M value
 * @returns an array with an  x and Y value
 */
function locatePointOnLine(theLine, pointMeasure) {
  var pointLocation = [];
  var PrevCoordM;
  var CurCoordM;
  var beginM = 0;
  var endM = 0;
  var beginPoint = [];
  var endPoint = [];
  var totalLength;
  var beginPercentOfWhole;
  var beginRemainderPercent;
  var newX;
  var newY;

  for (var i = 1; i < theLine.length; i++) {
    PrevCoordM = roundToDecimalPlace(theLine[i - 1][2], 3);
    CurCoordM = roundToDecimalPlace(theLine[i][2], 3);

    //Finding the points on either side of the desired measure
    if (pointMeasure >= PrevCoordM && pointMeasure <= CurCoordM) {
      beginM = roundToDecimalPlace(theLine[i - 1][2], 3);
      beginPoint.push(theLine[i - 1][0], theLine[i - 1][1]);

      endM = roundToDecimalPlace(theLine[i][2], 3);
      endPoint.push(theLine[i][0], theLine[i][1]);

      //Total length for calc
      totalLength = roundToDecimalPlace(endM - beginM, 3);

      //Percents of begin/end calc
      beginPercentOfWhole = roundToDecimalPlace((pointMeasure - beginM) / totalLength, 2);
      beginRemainderPercent = 1 - beginPercentOfWhole;

      //New X
      newX = (beginPercentOfWhole * endPoint[0]) + (beginRemainderPercent * beginPoint[0]);

      //New Y
      newY = (beginPercentOfWhole * endPoint[1]) + (beginRemainderPercent * beginPoint[1]);

      pointLocation.push(newX, newY);
    }
  }

  return pointLocation;
}