#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

int minOperation(vector<int> locations) {
    unordered_map<int, int> freq;
    int n = locations.size();
    int max_freq = 0;

    for (int loc : locations) {
        freq[loc]++;
        if (freq[loc] > max_freq) {
            max_freq = freq[loc];
        }
    }

    // Minimum operations is max of max frequency and ceil(n/2)
    int min_ops = max(max_freq, (n + 1) / 2);
    return min_ops;
}
