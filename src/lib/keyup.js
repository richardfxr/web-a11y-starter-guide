export function keyup(node, map) {
	
	const listener = (e) => { if (map[e.key]) map[e.key](e); }
	
	node.addEventListener("keyup", listener);
	
	return {
		destroy() { node.removeEventListener("keyup", listener); }
	}
}