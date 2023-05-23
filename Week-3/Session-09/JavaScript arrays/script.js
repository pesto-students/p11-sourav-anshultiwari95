function divideArray(nums) {
   const EvenNums = [];
   const OddNums = [];
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 == 1)
         OddNums.push(nums[i]);
      else
         EvenNums.push(nums[i]);
   }

   EvenNums.sort((a, b) => a - b);
   OddNums.sort((a, b) => a - b);
   console.log("Even Numbers:")
   if (EvenNums.length == 0)
      console.log("None");
   else {
      for (let i = 0; i < EvenNums.length; i++)
         console.log(EvenNums[i]);
   }
   console.log("Odd Numbers:")
   if (OddNums.length == 0)
      console.log("None");
   else {
      for (let i = 0; i < OddNums.length; i++)
         console.log(OddNums[i]);
   }
}