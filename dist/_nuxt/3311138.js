(window.webpackJsonp=window.webpackJsonp||[]).push([[32,159],{483:function(t){t.exports=JSON.parse('{"instructors":[{"imgSrc":"team-01.jpg","name":"Jane Seymour","designation":"UI Designer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-02.jpg","name":"Edward Norton","designation":"Web Developer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-03.jpg","name":"Penelope Cruz","designation":"Digital Marketer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-04.jpg","name":"John Travolta","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-05.jpg","name":"Hilary Swank","designation":"Laravel Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-06.jpg","name":"Steve Martin","designation":"App Developer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-07.jpg","name":"Louis Vargas","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-08.jpg","name":"Tamara Wilson","designation":"Affiliate Markeer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}],"yogaInstructors":[{"imgSrc":"team-01.jpg","name":"Jane Seymour","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-02.jpg","name":"Edward Norton","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-03.jpg","name":"Penelope Cruz","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}]}')},499:function(t,e,n){"use strict";n.r(e);n(37);var o={props:["instructor"]},c=n(18),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-team-grid team-style-2"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail-wrap"},[e("div",{staticClass:"thumbnail"},[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[e("img",{attrs:{src:"/images/team/team-02/"+t.instructor.imgSrc,alt:t.instructor.name+" Thumbnail"}})])],1),t._v(" "),e("ul",{staticClass:"team-share-info"},t._l(t.instructor.socialLinks,(function(t,n){return e("li",{key:n},[e("a",{attrs:{"aria-label":t.name,href:t.url}},[e("i",{class:t.iconName})])])})),0)]),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title"},[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t._v(t._s(t.instructor.name))])],1),t._v(" "),e("span",{staticClass:"designation"},[t._v(t._s(t.instructor.designation))]),t._v(" "),e("p",[t._v(t._s(t.instructor.excerpt))])])])])}),[],!1,null,null,null);e.default=component.exports},731:function(t,e,n){"use strict";n.r(e);n(51),n(15),n(24),n(25);var o=n(483),c={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,739))},InstructorTwo:function(){return Promise.resolve().then(n.bind(null,499))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,671))}},data:function(){return{instructorData:o}}},r=n(18),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-team-area team-area-5 section-gap-large"},[e("div",{staticClass:"container"},[e("SectionTitle",{attrs:{preTitle:"Instructors",title:"Course Instructors",alignment:"section-center"}}),t._v(" "),e("div",{staticClass:"row g-5"},t._l(t.instructorData.instructors.slice(0,3),(function(t,n){return e("div",{key:n,staticClass:"col-lg-4 col-md-6",attrs:{"data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"800"}},[e("InstructorTwo",{attrs:{instructor:t}})],1)})),0)],1),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:".8","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200",imgSrc:"/images/about/shape-13.png"}}),t._v(" "),t._m(0)],1)])}),[function(){var t=this._self._c;return t("li",{staticClass:"shape-3",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("span")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InstructorTwo:n(499).default})}}]);