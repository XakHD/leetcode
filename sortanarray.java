// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

class Solution {
    public int[] sortArray(int[] nums) {
         mergesort(nums,0,nums.length-1);
         return nums;
   }
   public void mergesort(int nums[],int low,int high){
    if(low == high){
        return;
    }

    int middle=(low+high)/2;
    mergesort(nums,low,middle);
    mergesort(nums,middle+1,high);
    merge(nums,low,middle,high);
   }
   public void merge(int[] nums,int low,int middle,int high){
    int left=low;
    int right=middle+1;
    List<Integer> temp=new ArrayList<>();
    while(left <= middle && right <= high){
        if(nums[left] <= nums[right]){
            temp.add(nums[left]);
            left++;
        }
        else{
            temp.add(nums[right]);
            right++;
        }
    }
    while(left <= middle){
        temp.add(nums[left]);
        left++;
    }
    while(right <= high){
        temp.add(nums[right]);
        right++;
    }

    for(int i=low;i<=high;i++){
        nums[i] =temp.get(i-low);
    }

   }
    
}