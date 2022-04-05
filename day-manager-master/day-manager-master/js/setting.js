const set = document.querySelector(".js-set"),
  spanOne = set.querySelector(".one"),
  spanTwo = set.querySelector(".two"),
  spanThree = set.querySelector(".three");

const div = document.querySelector(".js-option"),
  bg = div.querySelector(".js-text-background"),
  inter = div.querySelector(".js-text-interface");

const bgForm = div.querySelector(".js-form-bgot"),
  label = bgForm.querySelector(".js-ot-label"),
  slet = label.querySelector(".js-timezone");

const interForm = div.querySelector(".js-form-interot"),
  interOt = interForm.querySelector(".js-inter-option");

const labelRename = interOt.querySelector(".js-label-rename"),
  inputRename = labelRename.querySelector(".js-input-rename");

const labelColors = interOt.querySelector(".js-label-colors"),
  sletColors = labelColors.querySelector(".js-slet-colors");

const labelTypes = interOt.querySelector(".js-label-types"),
  sletTypes = labelTypes.querySelector(".js-slet-types");

const spans = document.querySelectorAll("span");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const slets = document.querySelectorAll("select");

const divs = document.querySelectorAll("div");
const forms = document.querySelectorAll("form");
const weatherSpan = document.querySelector(".js-weather");
const userForm = document.querySelector(".js-form");
const opacityBlock = document.querySelector(".js-opacity");

const BG_ANIMA_CN = "span-anima-bgfont";
const BG_ANIMA_END_CN = "anima-end-bgfont";
const INTER_ANIMA_CN = "span-anima-interfacefont";
const INTER_ANIMA_END_CN = "anima-end-interfacefont";
const BG_BACK_CN = "span-back-bgfont";
const INTER_BACK_CN = "span-back-interfacefont";
const SPAN_SHOW = "span-show";
const SPAN_HIDE = "hide";
const FADEIN_CN = "span-fadein";
const FADEOUT_CN = "span-fadeout";

const DARK_CN = "dark";
const INPUT_DARK_CN = "input-dark";

const OPACITY_CN = "opacity";
const REMOVE_CN = "removed";
/* local user */

function currentUser() {
  const getLocalValue = localStorage.getItem("username");
  if (getLocalValue === null) {
    divs.forEach(e => {
      if (e !== div && e !== opacityBlock) {
        e.classList.add(SPAN_HIDE);
      }
    });
    forms.forEach(e => {
      if (e !== userForm && e !== bgForm && e !== interOt && e !== interForm) {
        e.classList.add(SPAN_HIDE);
      }
    });
    weatherSpan.classList.add(SPAN_HIDE);
    opacityBlock.classList.add(OPACITY_CN);
  }

  userForm.addEventListener("submit", function () {
    opacityBlock.classList.add(REMOVE_CN);
    opacityBlock.addEventListener("animationend", () => {
      opacityBlock.classList.remove(REMOVE_CN);
      opacityBlock.classList.remove(OPACITY_CN);
    });

    divs.forEach(e => {
      if (e !== div && e !== opacityBlock) {
        e.classList.remove(SPAN_HIDE);
      }
    });
    forms.forEach(e => {
      if (e !== userForm && e !== bgForm && e !== interOt && e !== interForm) {
        e.classList.remove(SPAN_HIDE);
      }
    });
    weatherSpan.classList.remove(SPAN_HIDE);
  });
}

/* click event & animation */

window.addEventListener("click", function (event) {
  const target = event.target;
  notOptionClick(target);
});

function notOptionClick(elemunt) {
  const setOf =
    elemunt !== set &&
    elemunt !== spanOne &&
    elemunt !== spanTwo &&
    elemunt !== spanThree;
  const optionLine = elemunt !== bg && elemunt !== inter;
  const bgOption = elemunt !== label && elemunt !== slet;
  const interOption =
    elemunt !== labelRename &&
    elemunt !== inputRename &&
    elemunt !== labelColors &&
    elemunt !== sletColors &&
    elemunt !== labelTypes &&
    elemunt !== sletTypes;

  if (setOf && optionLine && bgOption && interOption) {
    div.classList.add(FADEOUT_CN);
    div.addEventListener("animationend", function () {
      div.classList.add(SPAN_HIDE);
      div.classList.remove(SPAN_SHOW);
      div.classList.remove(FADEOUT_CN);
    });

    const findClass = div.classList.contains(SPAN_HIDE);
    if (findClass === true) {
      div.classList.remove(FADEOUT_CN);
    }

    early();
    optionEarly();
  }
}

function style() {
  set.addEventListener("click", function () {
    const findClass = div.classList.contains(SPAN_HIDE);
    if (findClass === true) {
      div.classList.remove(SPAN_HIDE);
      div.classList.add(SPAN_SHOW);
      div.classList.add(FADEIN_CN);
      div.addEventListener("animationend", function () {
        div.classList.remove(FADEIN_CN);
        div.classList.remove(SPAN_HIDE);
      });
    } else {
      div.classList.add(FADEOUT_CN);
      label.classList.add(SPAN_HIDE);
      div.addEventListener("animationend", function () {
        div.classList.add(SPAN_HIDE);
        div.classList.remove(SPAN_SHOW);
        div.classList.remove(FADEOUT_CN);
      });
      early();
      optionEarly();
    }
  });

  bg.addEventListener("click", function () {
    inter.classList.remove(INTER_ANIMA_END_CN);
    bg.classList.remove(BG_BACK_CN);
    bg.classList.add(BG_ANIMA_CN);
    inter.classList.add(INTER_BACK_CN);
    bg.addEventListener("animationend", function () {
      bg.classList.remove(BG_ANIMA_CN);
      bg.classList.add(BG_ANIMA_END_CN);
    });
    showBgOption();
    showInterOption();
  });

  inter.addEventListener("click", function () {
    bg.classList.remove(BG_ANIMA_END_CN);
    inter.classList.remove(INTER_BACK_CN);
    inter.classList.add(INTER_ANIMA_CN);
    bg.classList.add(BG_BACK_CN);
    inter.addEventListener("animationend", function () {
      inter.classList.remove(INTER_ANIMA_CN);
      inter.classList.add(INTER_ANIMA_END_CN);
    });
    showBgOption();
    showInterOption();
  });
}
style();

function early() {
  bg.classList.remove(BG_ANIMA_END_CN);
  inter.classList.remove(INTER_ANIMA_END_CN);
  bg.classList.remove(BG_BACK_CN);
  inter.classList.remove(INTER_BACK_CN);
}

function optionEarly() {
  label.classList.remove(SPAN_SHOW);
  label.classList.add(SPAN_HIDE);
  interOt.classList.remove(SPAN_SHOW);
  interOt.classList.add(SPAN_HIDE);
}

function showBgOption() {
  const findClass = bg.classList.contains(BG_BACK_CN);
  if (findClass === false) {
    label.classList.remove(SPAN_HIDE);
    label.classList.add(FADEIN_CN);
    label.addEventListener("animationend", function () {
      label.classList.remove(FADEIN_CN);
      label.classList.add(SPAN_SHOW);
    });
  } else {
    label.classList.remove(SPAN_SHOW);
    label.classList.add(SPAN_HIDE);
  }
}

function showInterOption() {
  const findClass = inter.classList.contains(INTER_BACK_CN);
  if (findClass === false) {
    interOt.classList.remove(SPAN_HIDE);
    interOt.classList.add(FADEIN_CN);
    interOt.addEventListener("animationend", function () {
      interOt.classList.remove(FADEIN_CN);
      interOt.classList.add(SPAN_SHOW);
    });
  } else {
    interOt.classList.remove(SPAN_SHOW);
    interOt.classList.add(SPAN_HIDE);
  }
}

let indexList = [];
let handle;

function bgOt(line) {
  const sletValue = slet.value;
  const sletIndex = slet.selectedIndex;

  const indexObj = {
    sletIndex,
    id: "bg"
  };

  if (sletValue !== "none") {
    handle = setInterval(returnEarly, sletValue);
  } else if (sletValue === "none") {
    clearInterval(handle);
  }

  if (line !== false) {
    indexList.splice(line, 1, indexObj);
    saveIndex();
  } else if (line === false) {
    indexList.push(indexObj);
    saveIndex();
  }
}

function renameOt() {
  const renameValue = inputRename.value;
  const saveCheck = localStorage.getItem("username");

  if (saveCheck !== null) {
    localStorage.setItem("username", renameValue);
  }
}

function colorsOt(line) {
  const colorsValue = sletColors.value;
  const colorsIndex = sletColors.selectedIndex;

  const chackClass = spans.forEach(function (e) {
    const dark = e.classList.contains(DARK_CN);
    return dark;
  });

  const indexObj = {
    colorsIndex,
    id: "colors"
  };

  if (colorsValue === DARK_CN || chackClass === false) {
    spans.forEach(e => e.classList.add(DARK_CN));
    inputs.forEach(e => {
      if (e !== inputRename) {
        e.classList.add(INPUT_DARK_CN);
      }
    });
    labels.forEach(e => e.classList.add(DARK_CN));
    slets.forEach(e => e.classList.add(DARK_CN));
  } else if (colorsValue === "white") {
    spans.forEach(e => e.classList.remove(DARK_CN));
    inputs.forEach(e => {
      if (e !== inputRename) {
        e.classList.remove(INPUT_DARK_CN);
      }
    });
    labels.forEach(e => e.classList.remove(DARK_CN));
    slets.forEach(e => e.classList.remove(DARK_CN));
  }

  if (line !== false) {
    indexList.splice(line, 1, indexObj);
    saveIndex();
  } else if (line === false) {
    indexList.push(indexObj);
    saveIndex();
  }
}

function sletTypesOt(line) {
  const typesValue = sletTypes.value;
  const typesIndex = sletTypes.selectedIndex;

  const indexObj = {
    typesIndex,
    id: "types"
  };

  if (typesValue === "12hours") {
    typesHandle = "12hours";
  } else {
    typesHandle = "24hours";
  }

  if (line !== false) {
    indexList.splice(line, 1, indexObj);
    saveIndex();
  } else if (line === false) {
    indexList.push(indexObj);
    saveIndex();
  }
}

function saveIndex() {
  localStorage.setItem("index values", JSON.stringify(indexList));
}

function load() {
  const name = localStorage.getItem("index values");
  if (name !== null) {
    const parse = JSON.parse(name);
    const bgLineOf = parse
      .map(function (e) {
        return e.id;
      })
      .indexOf("bg");
    const colorsLineOf = parse
      .map(function (e) {
        return e.id;
      })
      .indexOf("colors");
    const typesLineOf = parse
      .map(function (e) {
        return e.id;
      })
      .indexOf("types");

    const getBgIndex = parse[bgLineOf].sletIndex;
    const getColorsIndex = parse[colorsLineOf].colorsIndex;
    const getTypesIndex = parse[typesLineOf].typesIndex;

    slet.selectedIndex = getBgIndex;
    sletColors.selectedIndex = getColorsIndex;
    sletTypes.selectedIndex = getTypesIndex;

    bgOt(bgLineOf);
    colorsOt(colorsLineOf);
    sletTypesOt(typesLineOf);
  } else {
    bgOt(false);
    colorsOt(false);
    sletTypesOt(false);
  }
}

function handleChange() {
  const bgLineOf = indexList
    .map(function (e) {
      return e.id;
    })
    .indexOf("bg");
  const colorsLineOf = indexList
    .map(function (e) {
      return e.id;
    })
    .indexOf("colors");
  const typesLineOf = indexList
    .map(function (e) {
      return e.id;
    })
    .indexOf("types");
  bgOt(bgLineOf);
  colorsOt(colorsLineOf);
  sletTypesOt(typesLineOf);
}

function init() {
  slets.forEach(s => s.addEventListener("change", handleChange));
  interForm.addEventListener("submit", renameOt);
  load();
  currentUser();
}
init();
