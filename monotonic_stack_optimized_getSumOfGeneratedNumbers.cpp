#include <vector>
#include <stack>
#include <set>
using namespace std;

long long getSumOfGeneratedNumbers(vector<int> arr) {
    int n = arr.size();
    if (n < 2) return 0;

    // To store unique differences
    set<int> unique_diffs;

    // For each element, find the next greater element index
    vector<int> next_greater(n, n);
    stack<int> s;
    for (int i = 0; i < n; ++i) {
        while (!s.empty() && arr[s.top()] < arr[i]) {
            next_greater[s.top()] = i;
            s.pop();
        }
        s.push(i);
    }

    // For each element, find the previous greater element index
    vector<int> prev_greater(n, -1);
    while (!s.empty()) s.pop();
    for (int i = n - 1; i >= 0; --i) {
        while (!s.empty() && arr[s.top()] <= arr[i]) {
            prev_greater[s.top()] = i;
            s.pop();
        }
        s.push(i);
    }

    // For each pair of largest and second largest, calculate difference and add to set
    // This is a heuristic approach to find pairs that can be largest and second largest in some subarray

    for (int i = 0; i < n; ++i) {
        int largest = arr[i];
        // Check next greater
        if (next_greater[i] < n) {
            int secondlargest = arr[next_greater[i]];
            int diff = abs(largest - secondlargest);
            unique_diffs.insert(diff);
        }
        // Check previous greater
        if (prev_greater[i] >= 0) {
            int secondlargest = arr[prev_greater[i]];
            int diff = abs(largest - secondlargest);
            unique_diffs.insert(diff);
        }
    }

    long long sum = 0;
    for (int diff : unique_diffs) {
        sum += diff;
    }
    return sum;
}
