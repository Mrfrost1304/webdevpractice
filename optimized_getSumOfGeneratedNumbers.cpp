#include <vector>
#include <set>
using namespace std;

long long getSumOfGeneratedNumbers(vector<int> arr) {
    int n = arr.size();
    if (n < 2) {
        return 0;
    }
    set<int> dis_differ;
    for (int i = 0; i < n - 1; ++i) {
        int largest = arr[i];
        int secondlargest = INT_MIN;
        for (int j = i + 1; j < n; ++j) {
            int val = arr[j];
            if (val > largest) {
                secondlargest = largest;
                largest = val;
            } else if (val > secondlargest && val != largest) {
                secondlargest = val;
            }
            if (secondlargest != INT_MIN) {
                dis_differ.insert(largest - secondlargest);
            }
        }
    }
    long long sum = 0;
    for (int diff : dis_differ) {
        sum += diff;
    }
    return sum;
}
