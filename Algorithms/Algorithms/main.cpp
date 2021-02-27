#include <iostream>
#include <vector>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n, k;
    
    cin >> n >> k;
    
    vector<int> v1;
    
    for(int i = 0; i<n; i++)
    {
        v1.push_back(i+1);
    }
    
    for(int i = 0; i<n; i++)
    {
        cout << v1[i] << '\n';
    }

    vector<int>::iterator iter = v1.begin();
    
    
    cout << *(iter+k-1) << '\n';
    v1.erase(iter+k-1);
    
    cout << 
    
    
//    v1.erase(v1.begin()+2);
//
//
//    for(iter =v1.begin(); iter != v1.end(); iter++)
//    {
//        cout << *iter << '\n';
//    }
    
    return 0;
}
