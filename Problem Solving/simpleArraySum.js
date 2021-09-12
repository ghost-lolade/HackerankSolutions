function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
   const sum = ar.reduce((a, b) => a+b, 0)
   return sum;

}