function insert_Row() {
	//Write your code here
	let tble = document.getElementById("sampleTable");
	let newRow = tble.insertRow(0);
	let c1 = newRow.insertCell(0);
	let c2 = newRow.insertCell(1);

	c1.textContent = "New Cell1";
	c2.textContent = "New Cell2";
}
