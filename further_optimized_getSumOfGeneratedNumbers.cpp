#include <vector>
#include <algorithm>
using namespace std;

long long getSumOfGeneratedNumbers(vector<int> arr) {
    int n = arr.size();
    if (n < 2) {
        return 0;
    }
    int max_val = *max_element(arr.begin(), arr.end());
    int min_val = *min_element(arr.begin(), arr.end());
    int max_diff = max_val - min_val;

    vector<bool> diff_exists(max_diff + 1, false);

    for (int i = 0; i < n - 1; ++i) {
        int largest = arr[i];
        int secondlargest = -1;
        for (int j = i + 1; j < n; ++j) {
            int val = arr[j];
            if (val > largest) {
                secondlargest = largest;
                largest = val;
            } else if (val > secondlargest && val != largest) {
                secondlargest = val;
            }
            if (secondlargest != -1) {
                int diff = largest - secondlargest;
                diff_exists[diff] = true;
            }
        }
    }

    long long sum = 0;
    for (int d = 1; d <= max_diff; ++d) {
        if (diff_exists[d]) {
            sum += d;
        }
    }
    return sum;
}
