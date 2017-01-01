module.exports = {
	get: function(a,b,c,x) {
		//area = |Ax|
		var area = Math.abs((a.x *(b.y - c.y) + b.x *(c.y - a.y) + c.x *(a.y - b.y))/2);
		//collinear, straight line
		if(area === 0) {
			return false;
		}

		var area_x_a_b = Math.abs((a.x *(b.y - x.y) + b.x *(x.y - a.y) + x.x *(a.y - b.y))/2);
		var area_x_a_c = Math.abs((a.x *(x.y - c.y) + x.x *(c.y - a.y) + c.x *(a.y - x.y))/2);
		var area_x_b_c = Math.abs((x.x *(b.y - c.y) + b.x *(c.y - x.y) + c.x *(x.y - b.y))/2);

		return area === (area_x_a_b + area_x_a_c + area_x_b_c);
	}
}
