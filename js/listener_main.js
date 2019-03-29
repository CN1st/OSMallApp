plus.key.addEventListener("backbutton", onback);
function onback() {
	vm.$toast("再次点击退出");
	removeEventListener();
	localStorage.setItem("kdn3",0);
	setTimeout(function() {
		plus.key.addEventListener("backbutton", onback);
	}, 3000);
}
function removeEventListener() {
	plus.key.removeEventListener("backbutton", onback);
}
