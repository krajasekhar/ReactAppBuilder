import { combineReducers } from 'redux';

const initialUserState = {
	curPage: "Build"
};
const userReducers = function (
	state = initialUserState, action) {
	let tmpObj = "";
	switch (action.type) {
		case 'NAV':
			// console.info("userNAV");
			tmpObj = JSON.parse(JSON.stringify(state));
			tmpObj.curPage = action.payload;
			return tmpObj;
		default:
			return state;
	}
}

const initialContentState = {
	curPage: "Content1",
	appName: "My App",
	navColor: "#000000",
	txtColor: "#ffffff",
	allPages: {
		"Content1": {
			"name": "Home",
			"components": [
				[
					{ "type": "text", "name": "Title", "value": "XYZ Technologies" },
					{ "type": "text", "name": "Sub title", "value": "Your product search ends here." },
					{ "type": "text", "name": "Image Url", "value": "https://source.unsplash.com/1285x500/?cover" },
					{ "type": "color", "name": "Title color", "value": "#ffffff" },
					{ "type": "color", "name": "Sub Title color", "value": "#ffffff" }
				], [
					{ "type": "text", "name": "Title", "value": "What We Do" },
					{ "type": "radio", "name": "Theme", "value": "White", "options":["Black","White"] },
					{ "type": "textarea", "name": "Para 1", "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim facilisis, tristique tellus dictum, interdum purus. Pellentesque sit amet magna eleifend, ultricies purus ac, ornare metus. Quisque efficitur dolor nisi. Fusce laoreet malesuada consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer non facilisis risus. Fusce ullamcorper leo sit amet diam rutrum malesuada. Vivamus vel est eu massa suscipit tincidunt eu vel magna. Donec tincidunt sit amet eros non bibendum. Integer sagittis congue enim et dictum. Donec sit amet orci risus. Vivamus nec sagittis nunc. Pellentesque non turpis quis felis laoreet ullamcorper vitae eget nibh. Quisque fringilla pulvinar accumsan. Vivamus accumsan lectus nisi, a lacinia odio euismod non. Maecenas ultricies vel nibh id vulputate." },
					{ "type": "textarea", "name": "Para 2", "value": "Donec mi lectus, fermentum a mi ac, elementum maximus turpis. Integer laoreet ex non sem aliquet, vitae placerat lacus lobortis. Etiam quis magna eu ipsum condimentum iaculis. Integer commodo erat et libero vehicula sagittis. Quisque blandit cursus velit at venenatis. In hac habitasse platea dictumst. Nulla pulvinar turpis sed metus condimentum, quis volutpat est ultricies. Morbi nec justo magna. Suspendisse ac augue eget quam bibendum posuere. Nam congue diam sed ex pharetra euismod. Sed finibus ipsum quis arcu tincidunt, eget euismod sem mattis. Pellentesque tempor dolor tristique purus sagittis, ut malesuada eros rutrum." }
				], [
					{ "type": "text", "name": "Title", "value": "Products" },
					{ "type": "radio", "name": "Theme", "value": "White", "options":["Black","White"] },
					{ "type": "text", "name": "Image Url", "value": "https://source.unsplash.com/150x80/?watch" },
					{ "type": "text", "name": "Caption", "value": "Product" },
					{ "type": "text", "name": "Image Url", "value": "https://source.unsplash.com/150x80/?mobile" },
					{ "type": "text", "name": "Caption", "value": "Product" },
					{ "type": "text", "name": "Image Url", "value": "https://source.unsplash.com/150x80/?garments" },
					{ "type": "text", "name": "Caption", "value": "Product" },
					{ "type": "text", "name": "Image Url", "value": "https://source.unsplash.com/150x80/?product" },
					{ "type": "text", "name": "Caption", "value": "Product" },
					{ "type": "text", "name": "Image Url", "value": "https://source.unsplash.com/150x80/?shoe" },
					{ "type": "text", "name": "Caption", "value": "Product" },
					{ "type": "text", "name": "Image Url", "value": "https://source.unsplash.com/150x80/?household" },
					{ "type": "text", "name": "Caption", "value": "Product" }
				]
			]
		},
		"Content2": {
			"name": "Features",
			"components": [
				[
					{ "type": "radio", "name": "Theme", "value": "White", "options":["Black","White"] },
					{ "type": "text", "name": "Card Title", "value": "Card title" },
					{ "type": "textarea", "name": "Card Text", "value": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
					{ "type": "text", "name": "Card Title", "value": "Card title" },
					{ "type": "textarea", "name": "Card Text", "value": "This card has supporting text below as a natural lead-in to additional content." },
					{ "type": "text", "name": "Card Title", "value": "Card title" },
					{ "type": "textarea", "name": "Card Text", "value": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." },
					{ "type": "text", "name": "Card Title", "value": "Card title" },
					{ "type": "textarea", "name": "Card Text", "value": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." },
					{ "type": "text", "name": "Card Title", "value": "Card title" },
					{ "type": "textarea", "name": "Card Text", "value": "This card has supporting text below as a natural lead-in to additional content." },
					{ "type": "text", "name": "Card Title", "value": "Card title" },
					{ "type": "textarea", "name": "Card Text", "value": "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." }
				]
			]
		},
		"Content3": {
			"name": "Feedback",
			"components": [
				[
					{ "type": "radio", "name": "Theme", "value": "White", "options":["Black","White"] },
					{ "type": "text", "name": "Title", "value": "Submit Form" },
					{ "type": "text", "name": "User Label", "value": "User" },
					{ "type": "text", "name": "User Value", "value": "Customer" },
					{ "type": "text", "name": "Email Label", "value": "Email address" },
					{ "type": "text", "name": "Email Help", "value": "We'll never share your email with anyone else" },
					{ "type": "text", "name": "Category Label", "value": "Category" },
					{ "type": "multipleSelect", "name": "Category Options", "value": ["Watches","Mobiles","Garments","Shoes","Other"], "options":["Watches","Mobiles","Garments","Shoes","Other"] },
					{ "type": "text", "name": "Comment Label", "value": "Comment" },
					{ "type": "text", "name": "Rating Label", "value": "Rating" },
					{ "type": "multiple", "name": "Rating Maximum", "value": 5, "options":[1,2,3,4,5,6,7,8,9,10] },
				]
			]
		},
		"Content4": {
			"name": "About",
			"components": [
				[
					{ "type": "radio", "name": "Theme", "value": "White", "options":["Black","White"] },
					{ "type": "textarea", "name": "Text", "value": "orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet cursus ex. Mauris vulputate nulla sit amet ex consequat ultrices. Suspendisse potenti. Pellentesque dictum vestibulum sodales. Aenean feugiat volutpat tincidunt. Praesent vel ante quis augue finibus euismod ut eu tellus. Suspendisse potenti. Duis scelerisque turpis quis justo eleifend vulputate. Fusce et felis tincidunt, placerat sapien ac, mattis felis. Donec sem nulla, ullamcorper tempus tortor et, vestibulum pulvinar eros. Maecenas pellentesque mattis iaculis." }
				]
			]
		}
	},
	curBuildComponent: ["", -1]
};
const contentReducers = function (
	state = initialContentState, action) {
	let tmpObj = "";
	switch (action.type) {
		case 'NAV':
			// console.info("userNAV");
			tmpObj = JSON.parse(JSON.stringify(state));
			tmpObj.curPage = "Content1";
			return tmpObj;
		case 'CNAV':
			// console.info("contentNAV");
			tmpObj = JSON.parse(JSON.stringify(state));
			tmpObj.curBuildComponent=["",-1];
			tmpObj.curPage = action.payload;
			return tmpObj;
		case 'COMPONENT_CLICK':
			// console.info("contentNAV");
			tmpObj = JSON.parse(JSON.stringify(state));
			tmpObj.curBuildComponent = action.payload;
			return tmpObj;
		case 'PROP_CHANGE':
			// console.info("PROP_CHANGE: " + action.payload + " " + action.content + " " + action.propIndex);
			// console.info("cbc "+tmpObj.curBuildComponent[1]);

			tmpObj = JSON.parse(JSON.stringify(state));
			tmpObj.allPages[action.content].components[tmpObj.curBuildComponent[1]][action.propIndex].value = action.payload;
			return tmpObj;
		case 'NAV_CHANGE':
			// console.info("nav: "+action.payload);
			tmpObj = JSON.parse(JSON.stringify(state));
			switch (action.index) {
				case 0:
					tmpObj.appName = action.payload;
					return tmpObj;
				case 1:
					tmpObj.navColor = action.payload;
					return tmpObj;
				case 2:
					tmpObj.txtColor = action.payload;
					return tmpObj;
				default:
					tmpObj.allPages[action.index].name = action.payload;
					return tmpObj;
			}
		default:
			return state;
	}
}

const allreducers = combineReducers(
	{
		users: userReducers,
		contents: contentReducers
	}
);

export default allreducers;