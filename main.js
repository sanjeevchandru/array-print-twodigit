//Separate two digit numbers of given array

document.write("Separate two digit numbers of given array"+"<br>");
document.write("-----------------------------------------"+"<br><br>");

var a=[7,12,9,10,93,45,234,37,6,100];
document.write("The array elements are:"+a+"<br>");
document.write("The count of array elements :"+a.length+"<br><br>")
document.write("The two digit array elements are:"+"<br>");
for(let i=0;i<a.length;i++){
    if(a[i]>9 && a[i]<100){
        document.write(a[i]+"<br>");
    }
}
