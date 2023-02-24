self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "encounters": function() { return /* binding */ encounters; },
/* harmony export */   "gameJams": function() { return /* binding */ gameJams; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Wolfenstein',
  description: 'Performed QA to ensure the game works as intended, and did CERO testing to ensure the game abides by Japanese code.',
  image: 'static/images/wolfenstein.jpg',
  tags: ['Bethesda', 'QA'],
  source: 'https://bethesda.net/en/game/wolfenstein-youngblood',
  id: 0
}, {
  title: 'Rage 2',
  description: 'Performed QA to ensure the game works as intended, and did CERO testing to ensure the game abides by Japanese code.',
  image: 'static/images/rage.jpg',
  tags: ['Bethesda', 'QA'],
  source: 'https://bethesda.net/en/game/rage2',
  id: 1
}, {
  title: 'Dragonflight',
  description: "Designed and implemented an array of encounters for World of Warcraft's latest expansion; Dragonflight",
  image: 'static/images/dragonflight.jpg',
  tags: ['Blizzard', 'Design', 'Intern'],
  source: 'https://dragonflight.blizzard.com/en-us/',
  id: 2
}];
var encounters = [{
  title: 'Basrikron',
  image: 'static/images/basrikron.jpg',
  description: "A hermit crab fiction featuring the rise of a bandit king in the farmland outside the bustling city of Storm's Hope",
  source: 'https://www.wowhead.com/npc=193535/basrikron',
  id: 0
}, {
  title: 'Amethyzar',
  description: 'Amethyzarite is a gem elemental skulking underneath the waking shores, designed for 5+ players.',
  image: 'static/images/amethyzar.jpg',
  source: 'https://www.wowhead.com/npc=193132/amethyzar-the-glittering',
  id: 1
}, {
  title: 'Matriarch',
  description: 'Thunderous Matriarch defends her cubs with electrical ferocity. Designed for 5+ players.',
  image: 'static/images/matriarch.jpg',
  source: 'https://youtu.be/GOmpaFaavtE',
  id: 2
}, {
  title: 'Gorjo',
  description: 'Gorjo keeps his mount, Snappy, on a tight leash. Designed for solo players.',
  image: 'static/images/gorjo.jpg',
  source: 'https://www.wowhead.com/npc=193226/gorjo-the-crab-shackler',
  id: 3
}, {
  title: 'Nulltheria',
  description: 'Nulltheria will bring the cosmos itself down upon players who interrupt her studies. Designed for solo players.',
  image: 'static/images/nulltheria.jpg',
  source: 'https://youtu.be/WyLgAnQPcN8',
  id: 4
}];
var gameJams = [{
  title: 'Bandit Journal',
  description: "A hermit crab fiction featuring the rise of a bandit king in the farmland outside the bustling city of Storm's Hope",
  source: 'static/writing/banditjournal.pdf',
  id: 0
}, {
  title: 'Childrens Tale',
  description: 'A micro fiction centered around the founder of Southreach, and a brief history of its tumultuous past.',
  source: 'static/writing/childrenstale.pdf',
  id: 1
}, {
  title: 'Farmers Fall',
  description: "An expansion of the Bandit's journal that more closely examines how a grain farmer becomes a leader of bandits.",
  source: 'static/writing/farmersfall.pdf',
  id: 2
}, {
  title: 'The Zealot',
  description: "A religious man seeks to enlighten the atheistic people of Storm's Hope to the coming destruction of their city.",
  source: 'static/writing/zealot.pdf',
  id: 3
}, {
  title: 'Trinity vs Liz',
  description: 'Two bounty hunters unknowingly compete for the same prize. One wants the money, the other is saving their mutual friend.',
  source: 'static/writing/trinity.pdf',
  id: 4
}];
var TimeLineData = [{
  year: 'Introduction',
  text: "My love for game development started from a class I took in highschool. It's been 5 years since then, and development  remains my best-loved passion."
}, {
  year: 'Games',
  text: "Some of my favorite games that I have committed thousands of hours to include, League of Legends, Counter-Strike, Minecraft, and World of Warcraft." // My first game jam was through a local game developer community
  // The people were hella nice bruv
  // The first game jam I entered was through a local game develop community. I was nervous when I first arrived but after
  // meeting some of the people and showing off my game, I knew I was in the right community.

}, {
  year: 'Aspiration',
  text: 'I aspire to someday work on the games I have grown up playing. My dream companies are Riot, Blizzard, and Mojang.' // I continue to improve my development skills in hopes of one day working at a company
  // I aspire to one day work at one of the companies whos games I grew up playing, such as Riot, Blizzard, and Mojang.

}, {
  year: 'Riot & Blizzard',
  text: "If you're reading this, please give me a job. \n *Edit: I got a job :D"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwiaWQiLCJlbmNvdW50ZXJzIiwiZ2FtZUphbXMiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUNULHFIQUhKO0FBSUVDLE9BQUssRUFBRSwrQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxVQUFELEVBQWEsSUFBYixDQUxSO0FBTUVDLFFBQU0sRUFBRSxxREFOVjtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTCxPQUFLLEVBQUUsUUFEVDtBQUVFQyxhQUFXLEVBQ1QscUhBSEo7QUFJRUMsT0FBSyxFQUFFLHdCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLENBTFI7QUFNRUMsUUFBTSxFQUFFLG9DQU5WO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTCxPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQ1Qsd0dBSEo7QUFJRUMsT0FBSyxFQUFFLGdDQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCLFFBQXZCLENBTFI7QUFNRUMsUUFBTSxFQUFFLDBDQU5WO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixDQUFqQjtBQThCQSxJQUFNQyxVQUFVLEdBQUcsQ0FDeEI7QUFDRU4sT0FBSyxFQUFFLFdBRFQ7QUFFRUUsT0FBSyxFQUFFLDZCQUZUO0FBR0VELGFBQVcsRUFDVCxxSEFKSjtBQUtFRyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FEd0IsRUFTeEI7QUFDRUwsT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUNULGlHQUhKO0FBSUVDLE9BQUssRUFBRSw2QkFKVDtBQUtFRSxRQUFNLEVBQUUsNkRBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FUd0IsRUFpQnhCO0FBQ0VMLE9BQUssRUFBRSxXQURUO0FBRUVDLGFBQVcsRUFDVCwwRkFISjtBQUlFQyxPQUFLLEVBQUUsNkJBSlQ7QUFLRUUsUUFBTSxFQUFFLDhCQUxWO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBakJ3QixFQXlCeEI7QUFDRUwsT0FBSyxFQUFFLE9BRFQ7QUFFRUMsYUFBVyxFQUNULDZFQUhKO0FBSUVDLE9BQUssRUFBRSx5QkFKVDtBQUtFRSxRQUFNLEVBQUUsNERBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0F6QndCLEVBaUN4QjtBQUNFTCxPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQ1QsaUhBSEo7QUFJRUMsT0FBSyxFQUFFLDhCQUpUO0FBS0VFLFFBQU0sRUFBRSw4QkFMVjtBQU1FQyxJQUFFLEVBQUU7QUFOTixDQWpDd0IsQ0FBbkI7QUEyQ0EsSUFBTUUsUUFBUSxHQUFHLENBQ3RCO0FBQ0VQLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQ1QscUhBSEo7QUFJRUcsUUFBTSxFQUFFLGtDQUpWO0FBS0VDLElBQUUsRUFBRTtBQUxOLENBRHNCLEVBUXRCO0FBQ0VMLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQ1Qsd0dBSEo7QUFJRUcsUUFBTSxFQUFFLGtDQUpWO0FBS0VDLElBQUUsRUFBRTtBQUxOLENBUnNCLEVBZXRCO0FBQ0VMLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFDVCxpSEFISjtBQUlFRyxRQUFNLEVBQUUsZ0NBSlY7QUFLRUMsSUFBRSxFQUFFO0FBTE4sQ0Fmc0IsRUFzQnRCO0FBQ0VMLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxrSEFISjtBQUlFRyxRQUFNLEVBQUUsMkJBSlY7QUFLRUMsSUFBRSxFQUFFO0FBTE4sQ0F0QnNCLEVBNkJ0QjtBQUNFTCxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUNULDBIQUhKO0FBSUVHLFFBQU0sRUFBRSw0QkFKVjtBQUtFQyxJQUFFLEVBQUU7QUFMTixDQTdCc0IsQ0FBakI7QUFzQ0EsSUFBTUcsWUFBWSxHQUFHLENBQzFCO0FBQ0VDLE1BQUksRUFBRSxjQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRDBCLEVBSzFCO0FBQ0VELE1BQUksRUFBRSxPQURSO0FBRUVDLE1BQUksdUpBRk4sQ0FHRTtBQUNBO0FBQ0E7QUFDQTs7QUFORixDQUwwQixFQWExQjtBQUNFRCxNQUFJLEVBQUUsWUFEUjtBQUVFQyxNQUFJLEVBQUUsbUhBRlIsQ0FHRTtBQUNBOztBQUpGLENBYjBCLEVBbUIxQjtBQUNFRCxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FuQjBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5YzljZWIzOTg3ZTcwZWFkZDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdXb2xmZW5zdGVpbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1BlcmZvcm1lZCBRQSB0byBlbnN1cmUgdGhlIGdhbWUgd29ya3MgYXMgaW50ZW5kZWQsIGFuZCBkaWQgQ0VSTyB0ZXN0aW5nIHRvIGVuc3VyZSB0aGUgZ2FtZSBhYmlkZXMgYnkgSmFwYW5lc2UgY29kZS4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3dvbGZlbnN0ZWluLmpwZycsXHJcbiAgICB0YWdzOiBbJ0JldGhlc2RhJywgJ1FBJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2JldGhlc2RhLm5ldC9lbi9nYW1lL3dvbGZlbnN0ZWluLXlvdW5nYmxvb2QnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1JhZ2UgMicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1BlcmZvcm1lZCBRQSB0byBlbnN1cmUgdGhlIGdhbWUgd29ya3MgYXMgaW50ZW5kZWQsIGFuZCBkaWQgQ0VSTyB0ZXN0aW5nIHRvIGVuc3VyZSB0aGUgZ2FtZSBhYmlkZXMgYnkgSmFwYW5lc2UgY29kZS4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3JhZ2UuanBnJyxcclxuICAgIHRhZ3M6IFsnQmV0aGVzZGEnLCAnUUEnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vYmV0aGVzZGEubmV0L2VuL2dhbWUvcmFnZTInLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0RyYWdvbmZsaWdodCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJEZXNpZ25lZCBhbmQgaW1wbGVtZW50ZWQgYW4gYXJyYXkgb2YgZW5jb3VudGVycyBmb3IgV29ybGQgb2YgV2FyY3JhZnQncyBsYXRlc3QgZXhwYW5zaW9uOyBEcmFnb25mbGlnaHRcIixcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9kcmFnb25mbGlnaHQuanBnJyxcclxuICAgIHRhZ3M6IFsnQmxpenphcmQnLCAnRGVzaWduJywgJ0ludGVybiddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9kcmFnb25mbGlnaHQuYmxpenphcmQuY29tL2VuLXVzLycsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY291bnRlcnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCYXNyaWtyb24nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL2Jhc3Jpa3Jvbi5qcGcnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSBoZXJtaXQgY3JhYiBmaWN0aW9uIGZlYXR1cmluZyB0aGUgcmlzZSBvZiBhIGJhbmRpdCBraW5nIGluIHRoZSBmYXJtbGFuZCBvdXRzaWRlIHRoZSBidXN0bGluZyBjaXR5IG9mIFN0b3JtJ3MgSG9wZVwiLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly93d3cud293aGVhZC5jb20vbnBjPTE5MzUzNS9iYXNyaWtyb24nLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0FtZXRoeXphcicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0FtZXRoeXphcml0ZSBpcyBhIGdlbSBlbGVtZW50YWwgc2t1bGtpbmcgdW5kZXJuZWF0aCB0aGUgd2FraW5nIHNob3JlcywgZGVzaWduZWQgZm9yIDUrIHBsYXllcnMuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9hbWV0aHl6YXIuanBnJyxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3Lndvd2hlYWQuY29tL25wYz0xOTMxMzIvYW1ldGh5emFyLXRoZS1nbGl0dGVyaW5nJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdNYXRyaWFyY2gnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdUaHVuZGVyb3VzIE1hdHJpYXJjaCBkZWZlbmRzIGhlciBjdWJzIHdpdGggZWxlY3RyaWNhbCBmZXJvY2l0eS4gRGVzaWduZWQgZm9yIDUrIHBsYXllcnMuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9tYXRyaWFyY2guanBnJyxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8veW91dHUuYmUvR09tcGFGYWF2dEUnLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0dvcmpvJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR29yam8ga2VlcHMgaGlzIG1vdW50LCBTbmFwcHksIG9uIGEgdGlnaHQgbGVhc2guIERlc2lnbmVkIGZvciBzb2xvIHBsYXllcnMuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9nb3Jqby5qcGcnLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly93d3cud293aGVhZC5jb20vbnBjPTE5MzIyNi9nb3Jqby10aGUtY3JhYi1zaGFja2xlcicsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTnVsbHRoZXJpYScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ051bGx0aGVyaWEgd2lsbCBicmluZyB0aGUgY29zbW9zIGl0c2VsZiBkb3duIHVwb24gcGxheWVycyB3aG8gaW50ZXJydXB0IGhlciBzdHVkaWVzLiBEZXNpZ25lZCBmb3Igc29sbyBwbGF5ZXJzLicsXHJcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvbnVsbHRoZXJpYS5qcGcnLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly95b3V0dS5iZS9XeUxnQW5RUGNOOCcsXHJcbiAgICBpZDogNCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVKYW1zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnQmFuZGl0IEpvdXJuYWwnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSBoZXJtaXQgY3JhYiBmaWN0aW9uIGZlYXR1cmluZyB0aGUgcmlzZSBvZiBhIGJhbmRpdCBraW5nIGluIHRoZSBmYXJtbGFuZCBvdXRzaWRlIHRoZSBidXN0bGluZyBjaXR5IG9mIFN0b3JtJ3MgSG9wZVwiLFxyXG4gICAgc291cmNlOiAnc3RhdGljL3dyaXRpbmcvYmFuZGl0am91cm5hbC5wZGYnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0NoaWxkcmVucyBUYWxlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQSBtaWNybyBmaWN0aW9uIGNlbnRlcmVkIGFyb3VuZCB0aGUgZm91bmRlciBvZiBTb3V0aHJlYWNoLCBhbmQgYSBicmllZiBoaXN0b3J5IG9mIGl0cyB0dW11bHR1b3VzIHBhc3QuJyxcclxuICAgIHNvdXJjZTogJ3N0YXRpYy93cml0aW5nL2NoaWxkcmVuc3RhbGUucGRmJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGYXJtZXJzIEZhbGwnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQW4gZXhwYW5zaW9uIG9mIHRoZSBCYW5kaXQncyBqb3VybmFsIHRoYXQgbW9yZSBjbG9zZWx5IGV4YW1pbmVzIGhvdyBhIGdyYWluIGZhcm1lciBiZWNvbWVzIGEgbGVhZGVyIG9mIGJhbmRpdHMuXCIsXHJcbiAgICBzb3VyY2U6ICdzdGF0aWMvd3JpdGluZy9mYXJtZXJzZmFsbC5wZGYnLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1RoZSBaZWFsb3QnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSByZWxpZ2lvdXMgbWFuIHNlZWtzIHRvIGVubGlnaHRlbiB0aGUgYXRoZWlzdGljIHBlb3BsZSBvZiBTdG9ybSdzIEhvcGUgdG8gdGhlIGNvbWluZyBkZXN0cnVjdGlvbiBvZiB0aGVpciBjaXR5LlwiLFxyXG4gICAgc291cmNlOiAnc3RhdGljL3dyaXRpbmcvemVhbG90LnBkZicsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVHJpbml0eSB2cyBMaXonLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdUd28gYm91bnR5IGh1bnRlcnMgdW5rbm93aW5nbHkgY29tcGV0ZSBmb3IgdGhlIHNhbWUgcHJpemUuIE9uZSB3YW50cyB0aGUgbW9uZXksIHRoZSBvdGhlciBpcyBzYXZpbmcgdGhlaXIgbXV0dWFsIGZyaWVuZC4nLFxyXG4gICAgc291cmNlOiAnc3RhdGljL3dyaXRpbmcvdHJpbml0eS5wZGYnLFxyXG4gICAgaWQ6IDQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAge1xyXG4gICAgeWVhcjogJ0ludHJvZHVjdGlvbicsXHJcbiAgICB0ZXh0OiBcIk15IGxvdmUgZm9yIGdhbWUgZGV2ZWxvcG1lbnQgc3RhcnRlZCBmcm9tIGEgY2xhc3MgSSB0b29rIGluIGhpZ2hzY2hvb2wuIEl0J3MgYmVlbiA1IHllYXJzIHNpbmNlIHRoZW4sIGFuZCBkZXZlbG9wbWVudCAgcmVtYWlucyBteSBiZXN0LWxvdmVkIHBhc3Npb24uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB5ZWFyOiAnR2FtZXMnLFxyXG4gICAgdGV4dDogYFNvbWUgb2YgbXkgZmF2b3JpdGUgZ2FtZXMgdGhhdCBJIGhhdmUgY29tbWl0dGVkIHRob3VzYW5kcyBvZiBob3VycyB0byBpbmNsdWRlLCBMZWFndWUgb2YgTGVnZW5kcywgQ291bnRlci1TdHJpa2UsIE1pbmVjcmFmdCwgYW5kIFdvcmxkIG9mIFdhcmNyYWZ0LmAsXHJcbiAgICAvLyBNeSBmaXJzdCBnYW1lIGphbSB3YXMgdGhyb3VnaCBhIGxvY2FsIGdhbWUgZGV2ZWxvcGVyIGNvbW11bml0eVxyXG4gICAgLy8gVGhlIHBlb3BsZSB3ZXJlIGhlbGxhIG5pY2UgYnJ1dlxyXG4gICAgLy8gVGhlIGZpcnN0IGdhbWUgamFtIEkgZW50ZXJlZCB3YXMgdGhyb3VnaCBhIGxvY2FsIGdhbWUgZGV2ZWxvcCBjb21tdW5pdHkuIEkgd2FzIG5lcnZvdXMgd2hlbiBJIGZpcnN0IGFycml2ZWQgYnV0IGFmdGVyXHJcbiAgICAvLyBtZWV0aW5nIHNvbWUgb2YgdGhlIHBlb3BsZSBhbmQgc2hvd2luZyBvZmYgbXkgZ2FtZSwgSSBrbmV3IEkgd2FzIGluIHRoZSByaWdodCBjb21tdW5pdHkuXHJcbiAgfSxcclxuICB7XHJcbiAgICB5ZWFyOiAnQXNwaXJhdGlvbicsXHJcbiAgICB0ZXh0OiAnSSBhc3BpcmUgdG8gc29tZWRheSB3b3JrIG9uIHRoZSBnYW1lcyBJIGhhdmUgZ3Jvd24gdXAgcGxheWluZy4gTXkgZHJlYW0gY29tcGFuaWVzIGFyZSBSaW90LCBCbGl6emFyZCwgYW5kIE1vamFuZy4nLFxyXG4gICAgLy8gSSBjb250aW51ZSB0byBpbXByb3ZlIG15IGRldmVsb3BtZW50IHNraWxscyBpbiBob3BlcyBvZiBvbmUgZGF5IHdvcmtpbmcgYXQgYSBjb21wYW55XHJcbiAgICAvLyBJIGFzcGlyZSB0byBvbmUgZGF5IHdvcmsgYXQgb25lIG9mIHRoZSBjb21wYW5pZXMgd2hvcyBnYW1lcyBJIGdyZXcgdXAgcGxheWluZywgc3VjaCBhcyBSaW90LCBCbGl6emFyZCwgYW5kIE1vamFuZy5cclxuICB9LFxyXG4gIHtcclxuICAgIHllYXI6ICdSaW90ICYgQmxpenphcmQnLFxyXG4gICAgdGV4dDogXCJJZiB5b3UncmUgcmVhZGluZyB0aGlzLCBwbGVhc2UgZ2l2ZSBtZSBhIGpvYi4gXFxuICpFZGl0OiBJIGdvdCBhIGpvYiA6RFwiLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=