import java.util.*;
public class SubarraySum {
    public static void main(String[] args) {
        int[] arr = {4, 2, -8, 5, 2, 1};
        int target = 6;

        System.out.println(countSubarrays(arr, target));
    }
    public static int countSubarrays(int[] arr, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        int sum = 0;
        int count = 0;
        map.put(0, 1);
        for (int num : arr) {
            sum += num;
            if (map.containsKey(sum - target)) {
                count += map.get(sum - target);
            }
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}