(window.webpackJsonp=window.webpackJsonp||[]).push([[95,151],{510:function(t,n,r){"use strict";r.r(n);var m={props:["instagram"]},l=r(18),component=Object(l.a)(m,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"instagram-grid"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.instagram.imgSrc,alt:t.instagram.imgAlt}}),t._v(" "),n("span",{staticClass:"user-info"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"icon-instagram"})]),t._v(" "),n("span",{staticClass:"user-name"},[t._v(t._s(t.instagram.title))])])])],1)}),[],!1,null,null,null);n.default=component.exports},522:function(t){t.exports=JSON.parse('{"kitchenPosts":[{"imgSrc":"/images/instagram/instagram-01.jpg","title":"@EduBlink.Cooking","imgAlt":"Kitchen Instagram"},{"imgSrc":"/images/instagram/instagram-02.jpg","title":"@EduBlink.Cooking","imgAlt":"Kitchen Instagram"},{"imgSrc":"/images/instagram/instagram-03.jpg","title":"@EduBlink.Cooking","imgAlt":"Kitchen Instagram"},{"imgSrc":"/images/instagram/instagram-04.jpg","title":"@EduBlink.Cooking","imgAlt":"Kitchen Instagram"},{"imgSrc":"/images/instagram/instagram-05.jpg","title":"@EduBlink.Cooking","imgAlt":"Kitchen Instagram"},{"imgSrc":"/images/instagram/instagram-06.jpg","title":"@EduBlink.Cooking","imgAlt":"Kitchen Instagram"}],"yogaPosts":[{"imgSrc":"/images/instagram/instagram-07.jpg","title":"@EduBlink.Yoga","imgAlt":"Yoga Instagram"},{"imgSrc":"/images/instagram/instagram-08.jpg","title":"@EduBlink.Yoga","imgAlt":"Yoga Instagram"},{"imgSrc":"/images/instagram/instagram-09.jpg","title":"@EduBlink.Yoga","imgAlt":"Yoga Instagram"},{"imgSrc":"/images/instagram/instagram-10.jpg","title":"@EduBlink.Yoga","imgAlt":"Yoga Instagram"},{"imgSrc":"/images/instagram/instagram-11.jpg","title":"@EduBlink.Yoga","imgAlt":"Yoga Instagram"},{"imgSrc":"/images/instagram/instagram-12.jpg","title":"@EduBlink.Yoga","imgAlt":"Yoga Instagram"}]}')},775:function(t,n,r){"use strict";r.r(n);r(15),r(23),r(24);var m=r(522),l={components:{SectionTitle:function(){return r.e(2).then(r.bind(null,709))},InstagramPost:function(){return Promise.resolve().then(r.bind(null,510))}},data:function(){return{InstagramData:m}}},e=r(18),component=Object(e.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"edu-instagram-area instagram-area-1"},[n("div",{staticClass:"container-fluid"},[n("SectionTitle",{attrs:{preTitle:"Instructors",preTitleClass:"pre-textsecondary",title:"Follow Me On Instagram",alignment:"section-center"}}),t._v(" "),n("div",{staticClass:"row g-3"},t._l(t.InstagramData.yogaPosts,(function(t,r){return n("div",{key:r,staticClass:"col-xl-2 col-md-4 col-sm-6"},[n("InstagramPost",{attrs:{instagram:t}})],1)})),0)],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{InstagramPost:r(510).default})}}]);