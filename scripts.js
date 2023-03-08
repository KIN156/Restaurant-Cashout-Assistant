function calculateTotal() {
			var value1 = parseFloat(document.getElementById("value1").value);
			var value2 = parseFloat(document.getElementById("value2").value);
			var value3 = parseFloat(document.getElementById("value3").value);
			var value4 = parseFloat(document.getElementById("value4").value);
			var totalSales = parseFloat(document.getElementById("total-sales").value);
			var total = value1 + value2 + value3 + value4;
			var salesTotal = totalSales - total;
            var salesCommission = totalSales * 0.04;
            var payableAmount = salesTotal + salesCommission;
			document.getElementById("total").innerHTML =  total.toFixed(2);
            document.getElementById("total-sales-value").innerHTML = totalSales.toFixed(2);
            document.getElementById("total-totalsales").innerHTML= salesTotal.toFixed(2);
            document.getElementById("sales-commission").innerHTML = salesCommission.toFixed(2);
            document.getElementById("payable-amount").innerHTML = payableAmount.toFixed(2);
		}
