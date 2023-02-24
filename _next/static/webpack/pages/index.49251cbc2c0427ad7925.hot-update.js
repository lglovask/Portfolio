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
  description: "Designed and implemented an array of encounters for World of Warcraft's latest expansion.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwiaWQiLCJlbmNvdW50ZXJzIiwiZ2FtZUphbXMiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUNULHFIQUhKO0FBSUVDLE9BQUssRUFBRSwrQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxVQUFELEVBQWEsSUFBYixDQUxSO0FBTUVDLFFBQU0sRUFBRSxxREFOVjtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTCxPQUFLLEVBQUUsUUFEVDtBQUVFQyxhQUFXLEVBQ1QscUhBSEo7QUFJRUMsT0FBSyxFQUFFLHdCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLENBTFI7QUFNRUMsUUFBTSxFQUFFLG9DQU5WO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTCxPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQ1QsMkZBSEo7QUFJRUMsT0FBSyxFQUFFLGdDQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCLFFBQXZCLENBTFI7QUFNRUMsUUFBTSxFQUFFLDBDQU5WO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixDQUFqQjtBQThCQSxJQUFNQyxVQUFVLEdBQUcsQ0FDeEI7QUFDRU4sT0FBSyxFQUFFLFdBRFQ7QUFFRUUsT0FBSyxFQUFFLDZCQUZUO0FBR0VELGFBQVcsRUFDVCxxSEFKSjtBQUtFRyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FEd0IsRUFTeEI7QUFDRUwsT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUNULGlHQUhKO0FBSUVDLE9BQUssRUFBRSw2QkFKVDtBQUtFRSxRQUFNLEVBQUUsNkRBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FUd0IsRUFpQnhCO0FBQ0VMLE9BQUssRUFBRSxXQURUO0FBRUVDLGFBQVcsRUFDVCwwRkFISjtBQUlFQyxPQUFLLEVBQUUsNkJBSlQ7QUFLRUUsUUFBTSxFQUFFLDhCQUxWO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBakJ3QixFQXlCeEI7QUFDRUwsT0FBSyxFQUFFLE9BRFQ7QUFFRUMsYUFBVyxFQUNULDZFQUhKO0FBSUVDLE9BQUssRUFBRSx5QkFKVDtBQUtFRSxRQUFNLEVBQUUsNERBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0F6QndCLEVBaUN4QjtBQUNFTCxPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQ1QsaUhBSEo7QUFJRUMsT0FBSyxFQUFFLDhCQUpUO0FBS0VFLFFBQU0sRUFBRSw4QkFMVjtBQU1FQyxJQUFFLEVBQUU7QUFOTixDQWpDd0IsQ0FBbkI7QUEyQ0EsSUFBTUUsUUFBUSxHQUFHLENBQ3RCO0FBQ0VQLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQ1QscUhBSEo7QUFJRUcsUUFBTSxFQUFFLGtDQUpWO0FBS0VDLElBQUUsRUFBRTtBQUxOLENBRHNCLEVBUXRCO0FBQ0VMLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQ1Qsd0dBSEo7QUFJRUcsUUFBTSxFQUFFLGtDQUpWO0FBS0VDLElBQUUsRUFBRTtBQUxOLENBUnNCLEVBZXRCO0FBQ0VMLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFDVCxpSEFISjtBQUlFRyxRQUFNLEVBQUUsZ0NBSlY7QUFLRUMsSUFBRSxFQUFFO0FBTE4sQ0Fmc0IsRUFzQnRCO0FBQ0VMLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxrSEFISjtBQUlFRyxRQUFNLEVBQUUsMkJBSlY7QUFLRUMsSUFBRSxFQUFFO0FBTE4sQ0F0QnNCLEVBNkJ0QjtBQUNFTCxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUNULDBIQUhKO0FBSUVHLFFBQU0sRUFBRSw0QkFKVjtBQUtFQyxJQUFFLEVBQUU7QUFMTixDQTdCc0IsQ0FBakI7QUFzQ0EsSUFBTUcsWUFBWSxHQUFHLENBQzFCO0FBQ0VDLE1BQUksRUFBRSxjQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRDBCLEVBSzFCO0FBQ0VELE1BQUksRUFBRSxPQURSO0FBRUVDLE1BQUksdUpBRk4sQ0FHRTtBQUNBO0FBQ0E7QUFDQTs7QUFORixDQUwwQixFQWExQjtBQUNFRCxNQUFJLEVBQUUsWUFEUjtBQUVFQyxNQUFJLEVBQUUsbUhBRlIsQ0FHRTtBQUNBOztBQUpGLENBYjBCLEVBbUIxQjtBQUNFRCxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FuQjBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ5MjUxY2JjMmMwNDI3YWQ3OTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdXb2xmZW5zdGVpbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1BlcmZvcm1lZCBRQSB0byBlbnN1cmUgdGhlIGdhbWUgd29ya3MgYXMgaW50ZW5kZWQsIGFuZCBkaWQgQ0VSTyB0ZXN0aW5nIHRvIGVuc3VyZSB0aGUgZ2FtZSBhYmlkZXMgYnkgSmFwYW5lc2UgY29kZS4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3dvbGZlbnN0ZWluLmpwZycsXHJcbiAgICB0YWdzOiBbJ0JldGhlc2RhJywgJ1FBJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2JldGhlc2RhLm5ldC9lbi9nYW1lL3dvbGZlbnN0ZWluLXlvdW5nYmxvb2QnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1JhZ2UgMicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1BlcmZvcm1lZCBRQSB0byBlbnN1cmUgdGhlIGdhbWUgd29ya3MgYXMgaW50ZW5kZWQsIGFuZCBkaWQgQ0VSTyB0ZXN0aW5nIHRvIGVuc3VyZSB0aGUgZ2FtZSBhYmlkZXMgYnkgSmFwYW5lc2UgY29kZS4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL3JhZ2UuanBnJyxcclxuICAgIHRhZ3M6IFsnQmV0aGVzZGEnLCAnUUEnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vYmV0aGVzZGEubmV0L2VuL2dhbWUvcmFnZTInLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0RyYWdvbmZsaWdodCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJEZXNpZ25lZCBhbmQgaW1wbGVtZW50ZWQgYW4gYXJyYXkgb2YgZW5jb3VudGVycyBmb3IgV29ybGQgb2YgV2FyY3JhZnQncyBsYXRlc3QgZXhwYW5zaW9uLlwiLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL2RyYWdvbmZsaWdodC5qcGcnLFxyXG4gICAgdGFnczogWydCbGl6emFyZCcsICdEZXNpZ24nLCAnSW50ZXJuJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2RyYWdvbmZsaWdodC5ibGl6emFyZC5jb20vZW4tdXMvJyxcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZW5jb3VudGVycyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0Jhc3Jpa3JvbicsXHJcbiAgICBpbWFnZTogJ3N0YXRpYy9pbWFnZXMvYmFzcmlrcm9uLmpwZycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBIGhlcm1pdCBjcmFiIGZpY3Rpb24gZmVhdHVyaW5nIHRoZSByaXNlIG9mIGEgYmFuZGl0IGtpbmcgaW4gdGhlIGZhcm1sYW5kIG91dHNpZGUgdGhlIGJ1c3RsaW5nIGNpdHkgb2YgU3Rvcm0ncyBIb3BlXCIsXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy53b3doZWFkLmNvbS9ucGM9MTkzNTM1L2Jhc3Jpa3JvbicsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQW1ldGh5emFyJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQW1ldGh5emFyaXRlIGlzIGEgZ2VtIGVsZW1lbnRhbCBza3Vsa2luZyB1bmRlcm5lYXRoIHRoZSB3YWtpbmcgc2hvcmVzLCBkZXNpZ25lZCBmb3IgNSsgcGxheWVycy4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL2FtZXRoeXphci5qcGcnLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly93d3cud293aGVhZC5jb20vbnBjPTE5MzEzMi9hbWV0aHl6YXItdGhlLWdsaXR0ZXJpbmcnLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ01hdHJpYXJjaCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1RodW5kZXJvdXMgTWF0cmlhcmNoIGRlZmVuZHMgaGVyIGN1YnMgd2l0aCBlbGVjdHJpY2FsIGZlcm9jaXR5LiBEZXNpZ25lZCBmb3IgNSsgcGxheWVycy4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL21hdHJpYXJjaC5qcGcnLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly95b3V0dS5iZS9HT21wYUZhYXZ0RScsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnR29yam8nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHb3JqbyBrZWVwcyBoaXMgbW91bnQsIFNuYXBweSwgb24gYSB0aWdodCBsZWFzaC4gRGVzaWduZWQgZm9yIHNvbG8gcGxheWVycy4nLFxyXG4gICAgaW1hZ2U6ICdzdGF0aWMvaW1hZ2VzL2dvcmpvLmpwZycsXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy53b3doZWFkLmNvbS9ucGM9MTkzMjI2L2dvcmpvLXRoZS1jcmFiLXNoYWNrbGVyJyxcclxuICAgIGlkOiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdOdWxsdGhlcmlhJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnTnVsbHRoZXJpYSB3aWxsIGJyaW5nIHRoZSBjb3Ntb3MgaXRzZWxmIGRvd24gdXBvbiBwbGF5ZXJzIHdobyBpbnRlcnJ1cHQgaGVyIHN0dWRpZXMuIERlc2lnbmVkIGZvciBzb2xvIHBsYXllcnMuJyxcclxuICAgIGltYWdlOiAnc3RhdGljL2ltYWdlcy9udWxsdGhlcmlhLmpwZycsXHJcbiAgICBzb3VyY2U6ICdodHRwczovL3lvdXR1LmJlL1d5TGdBblFQY044JyxcclxuICAgIGlkOiA0LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZUphbXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCYW5kaXQgSm91cm5hbCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBIGhlcm1pdCBjcmFiIGZpY3Rpb24gZmVhdHVyaW5nIHRoZSByaXNlIG9mIGEgYmFuZGl0IGtpbmcgaW4gdGhlIGZhcm1sYW5kIG91dHNpZGUgdGhlIGJ1c3RsaW5nIGNpdHkgb2YgU3Rvcm0ncyBIb3BlXCIsXHJcbiAgICBzb3VyY2U6ICdzdGF0aWMvd3JpdGluZy9iYW5kaXRqb3VybmFsLnBkZicsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2hpbGRyZW5zIFRhbGUnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBIG1pY3JvIGZpY3Rpb24gY2VudGVyZWQgYXJvdW5kIHRoZSBmb3VuZGVyIG9mIFNvdXRocmVhY2gsIGFuZCBhIGJyaWVmIGhpc3Rvcnkgb2YgaXRzIHR1bXVsdHVvdXMgcGFzdC4nLFxyXG4gICAgc291cmNlOiAnc3RhdGljL3dyaXRpbmcvY2hpbGRyZW5zdGFsZS5wZGYnLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0Zhcm1lcnMgRmFsbCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBbiBleHBhbnNpb24gb2YgdGhlIEJhbmRpdCdzIGpvdXJuYWwgdGhhdCBtb3JlIGNsb3NlbHkgZXhhbWluZXMgaG93IGEgZ3JhaW4gZmFybWVyIGJlY29tZXMgYSBsZWFkZXIgb2YgYmFuZGl0cy5cIixcclxuICAgIHNvdXJjZTogJ3N0YXRpYy93cml0aW5nL2Zhcm1lcnNmYWxsLnBkZicsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVGhlIFplYWxvdCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBIHJlbGlnaW91cyBtYW4gc2Vla3MgdG8gZW5saWdodGVuIHRoZSBhdGhlaXN0aWMgcGVvcGxlIG9mIFN0b3JtJ3MgSG9wZSB0byB0aGUgY29taW5nIGRlc3RydWN0aW9uIG9mIHRoZWlyIGNpdHkuXCIsXHJcbiAgICBzb3VyY2U6ICdzdGF0aWMvd3JpdGluZy96ZWFsb3QucGRmJyxcclxuICAgIGlkOiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdUcmluaXR5IHZzIExpeicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1R3byBib3VudHkgaHVudGVycyB1bmtub3dpbmdseSBjb21wZXRlIGZvciB0aGUgc2FtZSBwcml6ZS4gT25lIHdhbnRzIHRoZSBtb25leSwgdGhlIG90aGVyIGlzIHNhdmluZyB0aGVpciBtdXR1YWwgZnJpZW5kLicsXHJcbiAgICBzb3VyY2U6ICdzdGF0aWMvd3JpdGluZy90cmluaXR5LnBkZicsXHJcbiAgICBpZDogNCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7XHJcbiAgICB5ZWFyOiAnSW50cm9kdWN0aW9uJyxcclxuICAgIHRleHQ6IFwiTXkgbG92ZSBmb3IgZ2FtZSBkZXZlbG9wbWVudCBzdGFydGVkIGZyb20gYSBjbGFzcyBJIHRvb2sgaW4gaGlnaHNjaG9vbC4gSXQncyBiZWVuIDUgeWVhcnMgc2luY2UgdGhlbiwgYW5kIGRldmVsb3BtZW50ICByZW1haW5zIG15IGJlc3QtbG92ZWQgcGFzc2lvbi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHllYXI6ICdHYW1lcycsXHJcbiAgICB0ZXh0OiBgU29tZSBvZiBteSBmYXZvcml0ZSBnYW1lcyB0aGF0IEkgaGF2ZSBjb21taXR0ZWQgdGhvdXNhbmRzIG9mIGhvdXJzIHRvIGluY2x1ZGUsIExlYWd1ZSBvZiBMZWdlbmRzLCBDb3VudGVyLVN0cmlrZSwgTWluZWNyYWZ0LCBhbmQgV29ybGQgb2YgV2FyY3JhZnQuYCxcclxuICAgIC8vIE15IGZpcnN0IGdhbWUgamFtIHdhcyB0aHJvdWdoIGEgbG9jYWwgZ2FtZSBkZXZlbG9wZXIgY29tbXVuaXR5XHJcbiAgICAvLyBUaGUgcGVvcGxlIHdlcmUgaGVsbGEgbmljZSBicnV2XHJcbiAgICAvLyBUaGUgZmlyc3QgZ2FtZSBqYW0gSSBlbnRlcmVkIHdhcyB0aHJvdWdoIGEgbG9jYWwgZ2FtZSBkZXZlbG9wIGNvbW11bml0eS4gSSB3YXMgbmVydm91cyB3aGVuIEkgZmlyc3QgYXJyaXZlZCBidXQgYWZ0ZXJcclxuICAgIC8vIG1lZXRpbmcgc29tZSBvZiB0aGUgcGVvcGxlIGFuZCBzaG93aW5nIG9mZiBteSBnYW1lLCBJIGtuZXcgSSB3YXMgaW4gdGhlIHJpZ2h0IGNvbW11bml0eS5cclxuICB9LFxyXG4gIHtcclxuICAgIHllYXI6ICdBc3BpcmF0aW9uJyxcclxuICAgIHRleHQ6ICdJIGFzcGlyZSB0byBzb21lZGF5IHdvcmsgb24gdGhlIGdhbWVzIEkgaGF2ZSBncm93biB1cCBwbGF5aW5nLiBNeSBkcmVhbSBjb21wYW5pZXMgYXJlIFJpb3QsIEJsaXp6YXJkLCBhbmQgTW9qYW5nLicsXHJcbiAgICAvLyBJIGNvbnRpbnVlIHRvIGltcHJvdmUgbXkgZGV2ZWxvcG1lbnQgc2tpbGxzIGluIGhvcGVzIG9mIG9uZSBkYXkgd29ya2luZyBhdCBhIGNvbXBhbnlcclxuICAgIC8vIEkgYXNwaXJlIHRvIG9uZSBkYXkgd29yayBhdCBvbmUgb2YgdGhlIGNvbXBhbmllcyB3aG9zIGdhbWVzIEkgZ3JldyB1cCBwbGF5aW5nLCBzdWNoIGFzIFJpb3QsIEJsaXp6YXJkLCBhbmQgTW9qYW5nLlxyXG4gIH0sXHJcbiAge1xyXG4gICAgeWVhcjogJ1Jpb3QgJiBCbGl6emFyZCcsXHJcbiAgICB0ZXh0OiBcIklmIHlvdSdyZSByZWFkaW5nIHRoaXMsIHBsZWFzZSBnaXZlIG1lIGEgam9iLiBcXG4gKkVkaXQ6IEkgZ290IGEgam9iIDpEXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==