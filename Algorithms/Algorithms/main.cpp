#include <iostream>
using namespace std;

int main(void)
{
    int n, m;
    
    cin >> n >> m;
    
    int ** arr = new int*[n];
    
    for(int i = 0; i<n; i++)
    {
        arr[i] = new int[m];
    }
    
    for(int i = 0; i<n; i++)
    {
        for(int j = 0; j<m; j++)
        {
            cin >> arr[i][j]
        }
    }
    
}
