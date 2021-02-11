#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> v1;
int chk;
void bs_search(int num)
{
    int left = 0;
    int right = (int)v1.size() -1;
    int mid;
    
    while(left <= right)
    {
        mid = (left+right) / 2;
        if(v1[mid] == num)
        {
            chk++;
            break;
        }
        else if(v1[mid] < num)
            left = mid+1;
        else
        {
            right = mid-1;
        }
    }
}

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n, m;
    int num;
    
    cin >> n;
    
    for(int i = 0; i<n; i++)
    {
        cin >> num;
        v1.push_back(num);
    }
    sort(v1.begin(), v1.end());
    cin >> m;
    for(int i = 0; i<m; i++)
    {
        cin >> num;
        chk = 0;
        bs_search(num);
        if(chk != 0)
            cout << 1 << '\n';
        else
            cout << 0 << '\n';
    }

    return 0;
}
