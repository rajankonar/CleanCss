var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssMergeSelectors = require('postcss-merge-selectors');
var postcssMergeLongHand = require('postcss-merge-longhand');
var postcssMergeRules = require('postcss-merge-rules');
var postcssCombibeDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
var postcssGrouper = require('postcss-grouper');
var postcssSortStyleRules = require('postcss-sort-style-rules');
var postcssDiscardDuplicate = require('postcss-discard-duplicates');



gulp.task('css', function () {
  

  var processors = [
    postcssMergeLongHand,
    postcssGrouper,
    postcssSortStyleRules,
    postcssDiscardDuplicate,
    postcssCombibeDuplicatedSelectors,
    postcssMergeRules,
    postcssMergeSelectors
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});