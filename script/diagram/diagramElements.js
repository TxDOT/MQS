function drawDiagramBaseAndTitle(routename) {
  let drawDiagramBaseAndTitleArr = [];

  drawDiagramBaseAndTitleArr.push({ "drawDiagramBaseAndTitle": '' });

  drawDiagramBaseAndTitleArr.push({ "drawDiagramBase_nopix": '' });
  drawDiagramBase_nopix();

  drawDiagramBaseAndTitleArr.push({ "drawDiagramTitle_nopix": routename });
  drawDiagramTitle_nopix(routename);
}

function buildDfoAxis(dfo_fm, dfo_to) {
  let buildDfoAxisArr = [];

  buildDfoAxisArr.push({ "buildDfoAxis": '' });
  //LRM Labels
  buildDfoAxisArr.push({ "drawDfoHeading_nopix": '' });
  drawDfoHeading_nopix();
  //Draw roadway line DFO 
  buildDfoAxisArr.push({ "drawDfoRoadwayLine_nopix": '' });
  drawDfoRoadwayLine_nopix();
  //Beginning tick mark DFO
  buildDfoAxisArr.push({ "drawDfoTickBegLine_nopix": '' });
  drawDfoTickBegLine_nopix();
  //Ending tick mark DFO
  buildDfoAxisArr.push({ "drawDfoTickEndLine_nopix": '' });
  drawDfoTickEndLine_nopix();
  buildDfoAxisArr.push({ "drawDFOTickLabels_nopix": { "diagramDFOBeg_mi": dfo_fm, "diagramDFOEnd_mi": dfo_to } });
  drawDFOTickLabels_nopix(dfo_fm, dfo_to);

  let imagedata = document.getElementById("srdCanvas").toDataURL("image/png");
  document.getElementById("img").src = imagedata;
}

function buildMptAxis() {
  let buildMptAxisArr = [];

  buildMptAxisArr.push({ "buildMptAxis": '' });
  //LRM Labels
  buildMptAxisArr.push({ "drawMptHeading_nopix": '' });
  drawMptHeading_nopix();
  //Draw roadway line MilePoint
  buildMptAxisArr.push({ "drawMptRoadwayLine_nopix": '' });
  drawMptRoadwayLine_nopix();
  //Beginning tick mark MilePoint
  buildMptAxisArr.push({ "drawMptTickBegLine_nopix": '' });
  drawMptTickBegLine_nopix();
  //Ending tick mark MilePoint
  buildMptAxisArr.push({ "drawMptTickEndLine_nopix": '' });
  drawMptTickEndLine_nopix();
}

function drawMultiControlSections(bandArr) {
  let drawMultiControlSectionsArr = [];

  for (let i = 0; i < bandArr.length; i = i + 1) {
    let bandObj = bandArr[i];

    // draw tick marks
    drawMultiControlSectionsArr.push({ "drawMptInternalBegLabelsByCharLen_nopix": { "DiagramMpBeg_mi": bandObj.begin_mpt_label, "offsetBeg_mi": bandObj.offset_beg_mi } });
    drawMptInternalBegLabelsByCharLen_nopix(bandObj.begin_mpt_label, bandObj.offset_beg_mi);
    drawMultiControlSectionsArr.push({ "drawMptInternalEndLabels_nopix": { "DiagramMpEnd_mi": bandObj.end_mpt_label, "offsetEnd_mi": bandObj.offset_end_mi } });
    drawMptInternalEndLabels_nopix(bandObj.end_mpt_label, bandObj.offset_end_mi);
    //Draw divider // test
    drawMultiControlSectionsArr.push({ "drawCSDividers_nopix": { "offsetEnd_mi": bandObj.offset_beg_mi } }); // test
    drawCSDividers_nopix(bandObj.offset_beg_mi); // test
    //Draw divider
    drawMultiControlSectionsArr.push({ "drawCSDividers_nopix": { "offsetEnd_mi": bandObj.offset_end_mi } });
    drawCSDividers_nopix(bandObj.offset_end_mi);
    // draw label
    drawMultiControlSectionsArr.push({ "drawCS1Label_nopix": { "customAttributeValue": bandObj.label, "offsetBeg_mi": bandObj.offset_beg_mi, "offsetEnd_mi": bandObj.offset_end_mi } });
    drawCS1Label_nopix(bandObj.label, bandObj.offset_beg_mi, bandObj.offset_end_mi);
  }
}

function drawFeatAttrMarks(feature, lineNo, markArr) {
  let drawFeatAttrMarksArr = [];

  //Custom Attribute Name
  drawCustAttrHeading_nopix(feature, lineNo);

  for (let i = 0; i < markArr.length; i = i + 1) {
    let markObj = markArr[i];
    drawRefMrkrCircleAndLabel_nopix(markObj.customAttributeMeasureBeg_mi, markObj.label, markObj.offset_beg_mi, markObj.lineNo);
  }

  if (markArr.length == 0) { drawNoLoad_nopix(lineNo); }
}

function drawFeatAttrBands(feature, lineNo, bandArr) {
  let drawFeatAttrBandsArr = [];

  //Custom Attribute Name
  drawCustAttrHeading_nopix(feature, lineNo);

  for (let i = 0; i < bandArr.length; i = i + 1) {
    let bandObj = bandArr[i];
    // draw band
    drawFeatAttrBandsArr.push({ "drawCustAttrTickBegLineAndLabel_nopix": { "i": i, "offsetBeg_mi": bandObj.offset_beg_mi, "offsetEnd_mi": bandObj.offset_end_mi, "paletteForAttribute": bandObj.paletteForAttribute, "lineNo": bandObj.lineNo } });
    drawDataGraphicStripe_nopix(bandObj.offset_beg_mi, bandObj.offset_end_mi, bandObj.i, bandObj.paletteForAttribute, bandObj.lineNo);
    // draw tick marks
    drawFeatAttrBandsArr.push({ "drawCustAttrTickBegLineAndLabel_nopix": { "customAttributeMeasureBeg_mi": bandObj.customAttributeMeasureBeg_mi, "offsetBeg_mi": bandObj.offset_beg_mi, "lineNo": bandObj.lineNo } });
    drawCustAttrTickBegLineAndLabel_nopix(bandObj.customAttributeMeasureBeg_mi, bandObj.offset_beg_mi, bandObj.lineNo);
    drawFeatAttrBandsArr.push({ "drawCustAttrTickEndLineAndLabel_nopix": { "customAttributeMeasureEnd_mi": bandObj.customAttributeMeasureEnd_mi, "offsetEnd_mi": bandObj.offset_end_mi, "lineNo": bandObj.lineNo } });
    drawCustAttrTickEndLineAndLabel_nopix(bandObj.customAttributeMeasureEnd_mi, bandObj.offset_end_mi, bandObj.lineNo);
    // draw label
    drawFeatAttrBandsArr.push({ "drawCustAttrFeatLabelByCharLen_nopix": { "customAttributeValue": bandObj.label, "offsetBeg_mi": bandObj.offset_beg_mi, "offsetEnd_mi": bandObj.offset_end_mi, "lineNo": bandObj.lineNo } });
    drawCustAttrFeatLabelByCharLen_nopix(bandObj.label, bandObj.offset_beg_mi, bandObj.offset_end_mi, bandObj.lineNo);
  }
  if (bandArr.length == 0) { drawNoLoad_nopix(lineNo); }
}

// general scaling functions

function setDiagramBase() {
  CHARTWIDTH_px = document.getElementById("content").style.width;
  CHARTHEIGHT_px = document.getElementById("content").style.height;
  CHARTWIDTH_px = getLeftCharacters(CHARTWIDTH_px, CHARTWIDTH_px.length - 2);
  CHARTHEIGHT_px = getLeftCharacters(CHARTHEIGHT_px, CHARTHEIGHT_px.length - 2);
  DIAGRAMLENPIXELS_px = calcDiagramLen();

  var baseCanvas = document.getElementById("srdCanvas");
  baseCanvas.style.width = CHARTWIDTH_px + "px";
  baseCanvas.style.height = CHARTHEIGHT_px + "px";
  baseCanvas.width = baseCanvas.offsetWidth;
  baseCanvas.height = baseCanvas.offsetHeight;
}

// pathway 1 scaling functions

function drawDFOTickLabels_nopix(diagramBeginDFO, diagramEndDFO) {
  drawDfoTickBegLabel_nopix(diagramBeginDFO);
  drawDfoTickEndLabel_nopix(diagramEndDFO);
}

function drawMptInternalBegLabelsByCharLen_nopix(measure_lbl, offsetBeg_mi) {
  drawMptInternalBegLabelsByCharLen_px(measure_lbl, limitOffsetBeg(offsetBeg_mi));
}

function drawMptInternalEndLabels_nopix(measure_lbl, offsetEnd_mi) {
  drawMptInternalEndLabels_px(measure_lbl, limitOffsetEnd(offsetEnd_mi));
}

function drawCS1Label_nopix(DiagramControlSectionLabel, offsetBeg_mi, offsetEnd_mi) {
  offsetBeg_px = limitOffsetBeg(offsetBeg_mi);
  offsetEnd_px = limitOffsetEnd(offsetEnd_mi);
  var offsetLab_px = Math.round(((offsetEnd_px - offsetBeg_px) / 2) + offsetBeg_px);
  drawCS1Label_px(DiagramControlSectionLabel, offsetLab_px);
}

function drawCSDividers_nopix(offsetEnd_mi) {
  drawCSDividers_px(limitOffsetEnd(offsetEnd_mi));
}

// pathway 2 scaling functions
function drawDataGraphicStripe_nopix(offsetBeg_mi, offsetEnd_mi, i, colour, lineNo) {
  let offsetBeg_px = Math.max(calcMiToPixOffset(offsetBeg_mi), calcLeftLimit());
  let offsetEnd_px = Math.min(calcMiToPixOffset(offsetEnd_mi), calcRightLimit());
  drawDataGraphic_stripe_px(offsetBeg_px, offsetEnd_px, i, colour, lineNo);
}

function drawCustAttrTickTermLineAndLabel_nopix(measure_lbl, offsetTerm_mi, lineNo) {
  drawCustAttrTickLineAndLabel_px(measure_lbl, Math.max(calcMiToPixOffset(offsetTerm_mi), calcLeftLimit()), lineNo);
}

function drawCustAttrTickBegLineAndLabel_nopix(measure_lbl, offsetBeg_mi, lineNo) {
  drawCustAttrTickLineAndLabel_px(measure_lbl, limitOffsetBeg(offsetBeg_mi), lineNo);
}

function drawCustAttrTickEndLineAndLabel_nopix(measure_lbl, offsetEnd_mi, lineNo) {
  drawCustAttrTickLineAndLabel_px(measure_lbl, limitOffsetEnd(offsetEnd_mi), lineNo);
}

function drawCustAttrFeatLabelByCharLen_nopix(customAttributeValue, offsetBeg_mi, offsetEnd_mi, lineNo) {
  offsetBeg_px = limitOffsetBeg(offsetBeg_mi);
  offsetEnd_px = limitOffsetEnd(offsetEnd_mi);
  var offsetLab_px = Math.round(((offsetEnd_px - offsetBeg_px) / 2) + offsetBeg_px);
  drawCustAttrFeatLabelByCharLen_px(customAttributeValue, offsetBeg_px, offsetEnd_px, offsetLab_px, lineNo);
}

function drawDataGraphic_stripe_px(offsetBeg_px, offsetEnd_px, i, colour, lineNo) {
  if (i % 2 == 0) {
    drawDataGraphic_px(offsetBeg_px, offsetEnd_px, ATTRIBUTECOLOR[colour], lineNo);
  } else {
    drawDataGraphic_px(offsetBeg_px, offsetEnd_px, ATTRIBUTECOLORLIGHT[colour], lineNo);
  }
}

function drawDataGraphic_px(offsetBeg_px, offsetEnd_px, color, lineNo) {
  yval = getYBaseline(lineNo);
  drawLine(offsetBeg_px, yval, offsetEnd_px, yval, 20, color);
}

function drawCustAttrTickLineAndLabel_px(customAttributeMeasureTerm_mi_lbl, xval, lineNo) {
  drawAttrTickLabel_px(customAttributeMeasureTerm_mi_lbl, xval, lineNo);
  drawAttrTickLine_px(xval, lineNo);
}

function drawAttrTickLabel_nopix(customAttributeMeasureTerm_mi, diagramDFOBeg_mi, lineNo) {
  let offset_px = calcMiToPixOffset(customAttributeMeasureTerm_mi - diagramDFOBeg_mi);
  drawAttrTickLabel_px(customAttributeMeasureTerm_mi, offset_px, lineNo);
}

function drawAttrTickLine_px(xval, lineNo) {
  drawLine(xval, getYBaseline(lineNo) - 13, xval, getYBaseline(lineNo) + 13, 2, AttributeTickColor);
}

function drawCustAttrFeatLabelByCharLen_px(customAttributeValue, offsetBeg_px, offsetEnd_px, offsetLab_px, lineNo) {
  var measurecanvas = document.getElementById("srdCanvas");
  var measurectx = measurecanvas.getContext("2d");
  var txtWidth_px = measurectx.measureText(customAttributeValue).width + 20;

  if (txtWidth_px > (offsetEnd_px - offsetBeg_px)) {
    drawCustAttrFeatLabelAbbr_px(offsetLab_px, lineNo);
  } else {
    drawCustAttrFeatLabel_px(customAttributeValue, offsetLab_px, lineNo);
  }
}

function drawCustAttrFeatLabelAbbr_px(offsetLab_px, lineNo) {
  drawText("+", offsetLab_px - 2, getYBaseline(lineNo) + 5, CustomAttributeLabelFeatureColor, "14");
}

function drawCustAttrFeatLabel_px(customAttributeValue, offsetLab_px, lineNo) {
  drawText(customAttributeValue, offsetLab_px - 2, getYBaseline(lineNo) + 5, CustomAttributeLabelFeatureColor, "14");
}

function drawRefMrkrCircleAndLabel_nopix(customAttributeMeasureBeg_mi, customAttributeValue, offsetBeg_mi, lineNo) {
  drawRefMrkrCircleAndLabel_px(customAttributeMeasureBeg_mi, customAttributeValue, calcMiToPixOffset(offsetBeg_mi), lineNo);
}

// pathway 1 drawing functions

var chartBackgroundColor = "#FFFFFF";
let HeaderBoxColor = "#1A5276";
let HeaderTitleColor = "#FFFFFF";
let NeatLineColor = "#CCCCCC";
let DfoPrimaryColor = "#000000"
let DfoSecondaryColor = "#696969"
let MptPrimaryColor = "#DC143C";
let MptSecondaryColor = "#f08080";
let DiagramTermLabelColor = "#DC143C";
let CSLabelColor = "#DC143C";
let CSDividerColor = "#DC143C";

function drawDiagramBase_nopix() {
  clearDrawings();


  drawBgColor_nopix();
  drawHeaderBox_nopix();  //#4682B4
  drawHeaderTitle_nopix();
  drawNeatline_nopix();
}

function drawBgColor_nopix() {
  drawRectangle(0, 0, CHARTWIDTH_px, CHARTHEIGHT_px, chartBackgroundColor);
}

function drawHeaderBox_nopix() {
  drawRectangle(0, 0, CHARTWIDTH_px, 55, HeaderBoxColor);
}

function drawHeaderTitle_nopix() {
  drawText("Complicated Roadway Diagram", 350, 40, HeaderTitleColor, "36");
}

function drawNeatline_nopix() {
  drawLineMultiplePoints([
    [0, 0],
    [CHARTWIDTH_px - 1, 0],
    [CHARTWIDTH_px - 1, CHARTHEIGHT_px - 1],
    [0, CHARTHEIGHT_px - 1],
    [0, 0]],
    2, NeatLineColor);
}

function drawDiagramTitle_nopix(diagramTitle) {
  var measurecanvas = document.getElementById("srdCanvas");
  var measurectx = measurecanvas.getContext("2d");
  measurectx.font = "24px System";

  var theDiagramRouteLabel = diagramTitle + "   Length: " + roundToDecimalPlace(DIAGRAMLENMILES_MI, 3) + " mile(s)";
  var txtWidth_px = measurectx.measureText(theDiagramRouteLabel).width;
  drawText(theDiagramRouteLabel, CHARTWIDTH_px - txtWidth_px + 120, 36, "#FFFFFF", "24");
}

///////////

function drawDfoHeading_nopix() {
  drawText("DFO", BORDERPADDINGX_px - 70, MAINROADWAYLINEY_px - 20, DfoPrimaryColor, "12");
}

function drawDfoRoadwayLine_nopix() {
  yval = MAINROADWAYLINEY_px - 3;
  lineLeft = calcLeftLimit();
  lineRight = calcRightLimit();
  drawLine(lineLeft, yval, lineRight, yval, 4, DfoPrimaryColor);
}

function drawDfoTickBegLine_nopix() {
  xval = calcLeftLimit();
  drawDfoTickTermLine_px(xval);
}

function drawDfoTickEndLine_nopix() {
  xval = calcRightLimit();
  drawDfoTickTermLine_px(xval);
}

function drawDfoTickTermLine_px(xval) {
  lineBase = MAINROADWAYLINEY_px - 1;
  lineTip = lineBase - 49;
  drawLine(xval, lineTip, xval, lineBase, 2, DfoPrimaryColor);
}

function drawDfoTickBegLabel_nopix(dfoTerm_lbl) {
  xval = calcLeftLimit();
  drawDfoTickTermLabel_px(dfoTerm_lbl, xval);
}

function drawDfoTickEndLabel_nopix(dfoTerm_lbl) {
  xval = calcRightLimit();
  drawDfoTickTermLabel_px(dfoTerm_lbl, xval);
}

function drawDfoTickTermLabel_px(dfoTerm_lbl, xval) {
  drawText(dfoTerm_lbl, xval, MAINROADWAYLINEY_px - 60, DfoPrimaryColor, "12");
}

///////////

function drawMptHeading_nopix() {
  drawText("Milepoint", BORDERPADDINGX_px - 70, MAINROADWAYLINEY_px + 30, MptPrimaryColor, "12");
}

function drawMptRoadwayLine_nopix() {
  yval = MAINROADWAYLINEY_px + 1;
  lineLeft = calcLeftLimit();
  lineRight = calcRightLimit();
  drawLine(lineLeft, yval, lineRight, yval, 4, MptPrimaryColor);
}

function drawMptTickBegLine_nopix() {
  xval = calcLeftLimit();
  drawMptTickTermLine_px(xval);
}

function drawMptTickEndLine_nopix() {
  xval = calcRightLimit();
  drawMptTickTermLine_px(xval);
}

function drawMptTickTermLine_px(xval) {
  lineBase = MAINROADWAYLINEY_px - 1;
  lineTip = lineBase + 56;
  drawLine(xval, lineBase, xval, lineTip, 2, MptPrimaryColor);
}

///////////

function drawMptInternalBegLabelsByCharLen_px(DiagramMpTerm_mi_lbl, xOffset_px) {
  if (DiagramMpTerm_mi_lbl.toString().length == 1) { characterOffset_px = 10; } else { characterOffset_px = 25; }
  drawMptInternalBegLabels_px(DiagramMpTerm_mi_lbl, xOffset_px, characterOffset_px);
}

function drawMptInternalEndLabels_px(DiagramMpTerm_mi_lbl, xAdjustment_px) {
  let theX = xAdjustment_px - 25;
  drawMptLabel_px(DiagramMpTerm_mi_lbl, theX);
}

function drawMptInternalBegLabels_px(DiagramMpTerm_mi_lbl, xOffset_px, characterOffset_px) {
  drawMptLabel_px(DiagramMpTerm_mi_lbl, xOffset_px + characterOffset_px);
}

function drawMptLabel_px(DiagramMpTerm_mi_lbl, xval) {
  drawText(DiagramMpTerm_mi_lbl, xval, MAINROADWAYLINEY_px + 72, DiagramTermLabelColor, "12");
}

function drawCSDividers_px(xval) {
  if (xval < (CHARTWIDTH_px - BORDERPADDINGY_px - 10)) {
    lineBase = MAINROADWAYLINEY_px + 3;
    lineTip = lineBase + 57;
    drawLine(xval, lineTip, xval, lineBase, 2, CSDividerColor);
  }
}

function drawCS1Label_px(DiagramControlSectionLabel, offsetLab_px) {
  drawText("CS: " + DiagramControlSectionLabel, offsetLab_px, MAINROADWAYLINEY_px + 90, CSLabelColor, "14");
}

///////////

// pathway 2 drawing functions

let LoadingTextColor = "#000000";
let NoLoadingTextColor = "#FFFFFF";
let CustomAttributeLabelColor = "#000000";
let LeaderLineColor = "#E8E8E8";
let AttributeTickColor = "#696969";
let CustomAttributeLabelFeatureColor = "#FFFFFF";
let RMLabelColor = "#000000";

const ATTRIBUTECOLOR = ["DodgerBlue", "Tomato", "Orange", "Violet", "Gray", "SlateBlue", "MediumSeaGreen"];
const ATTRIBUTECOLORLIGHT = ["#66b3ff", "#ffa899", "#ffc966", "#f6bcf6", "#b3b3b3", "#958adb", "#66cc94"];

function drawNoLoad_nopix(lineNo) {
  drawRectangle((CHARTWIDTH_px / 2) - 40, getYBaseline(lineNo) - 8, 80, 16, "#696969");
  drawText("No Records", CHARTWIDTH_px / 2, getYBaseline(lineNo) + 5, NoLoadingTextColor, "14");
}

function drawLoadingText_nopix(INVENTORYATTRIBUTE_lbl, lineNo) {
  drawText("Loading " + INVENTORYATTRIBUTE_lbl, Math.round(CHARTWIDTH_px / 2), getYBaseline(lineNo), LoadingTextColor, "10");
}

function drawCustAttrHeading_nopix(customAttributeLabel, lineNo) {
  drawCustAttrLabel_nopix(customAttributeLabel, lineNo);
  eraseLoadingMessage_nopix(lineNo);
  drawLeaderLine_nopix(lineNo);
}

function drawCustAttrLabel_nopix(customAttributeLabel, lineNo) {
  drawText(customAttributeLabel, calcLeftLimit() - 70, getYBaseline(lineNo) + 5, CustomAttributeLabelColor, "12");
}

function eraseLoadingMessage_nopix(lineNo) {
  drawRectangle(calcLeftLimit(), getYBaseline(lineNo) - 15, calcDiagramLen(), 20, "#FFFFFF");
}

function drawLeaderLine_nopix(lineNo) {
  yval = getYBaseline(lineNo);
  drawLine(calcLeftLimit(), yval, calcRightLimit(), yval, 3, LeaderLineColor);
}

///////////

function drawRefMrkrCircleAndLabel_px(customAttributeMeasureBeg_mi_lbl, customAttributeValue, offsetBeg_px, lineNo) {
  drawAttrTickLabel_px(customAttributeMeasureBeg_mi_lbl, offsetBeg_px, lineNo);
  drawRefMrkrCircle_px(offsetBeg_px, lineNo);
  drawRefMrkrLabel_px(customAttributeValue, offsetBeg_px, lineNo);
}

function drawAttrTickLabel_px(customAttributeMeasureTerm_lbl, xval, lineNo) {
  drawText(customAttributeMeasureTerm_lbl, xval, getYBaseline(lineNo) - 15, AttributeTickColor, "10");
}

function drawRefMrkrCircle_px(offsetBeg_px, lineNo) {
  drawCircle(offsetBeg_px, getYBaseline(lineNo), 5, RMLabelColor);
}

function drawRefMrkrLabel_px(customAttributeValue, xval, lineNo) {
  drawText(customAttributeValue, xval, getYBaseline(lineNo) + 17, RMLabelColor, "10.5");
}

