#include <iostream>
using namespace std;

int main(void)
{
    int n, m;
    int count;
    
    cin >> n >> m;
    
    char ** arr = new char*[n];
    
    for(int z = 0; z<n; z++)
    {
        arr[z] = new char[m];
    }
    
    for(int i=0; i< n; i++)
    {
        for(int j = 0; j<m; j++)
        {
            cin >> arr[i][j];
        }
    }
    
    int min_count = m*n;
    
    for(int x = 0; x+7<n; x++)
    {
        for(int y = 0; y+7 <m; y++)
        {
            count = 0;
            for(int i = x; i<x+8; i++)
            {
                for(int j = y; j<y+8; j++)
                {
                    if((i+j) % 2 == 0)
                    {
                        if(arr[i][j] != 'B')
                        {
                            count++;
                        }
                    }
                    else
                    {
                        if(arr[i][j] != 'W')
                        {
                            count++;
                        }
                    }
                    if(count > min_count)
                        break;
                }
            }
            if(min_count > count)
                min_count = count;
        }
    }
    for(int x = 0; x+7<n; x++)
    {
        for(int y = 0; y+7 <m; y++)
        {
            count = 0;
            for(int i = x; i<x+8; i++)
            {
                for(int j = y; j<y+8; j++)
                {
                    if((i+j) % 2 == 0)
                    {
                        if(arr[i][j] != 'W')
                        {
                            count++;
                        }
                    }
                    else
                    {
                        if(arr[i][j] != 'B')
                        {
                            count++;
                        }
                    }
                    if(count > min_count)
                        break;
                }
            }
            if(min_count > count)
                min_count = count;
        }
    }
    
    for(int j = 0; j<n; j++)
    {
        delete[] arr[j];
    }
    delete[] arr;

    
    cout << min_count << endl;
    return 0;
}
