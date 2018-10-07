

export const nav = function(target) {
	return { type: 'NAV',payload:target}
};

export const cnav = function(target) {
	return { type: 'CNAV',payload:target}
};

export const propChange = function(content,propIndex,target) {
	return { type: 'PROP_CHANGE',payload:target,propIndex:propIndex,content:content}
};

export const navChange = function(index,target) {
	return { type: 'NAV_CHANGE',payload:target,index:index}
};

export const componentClick = function(content,target) {
	return { type: 'COMPONENT_CLICK',payload:[content,target]}
};


export const getData = function() {
	return { type: 'GET_DATA' }
};

export const lnav = function(target) {
	return { type: 'LNAV',payload:target }
};
