#include <iostream>
#include <cstring>
using namespace std;

int main(void)
{
    int tc;
    char str[80];
    int con = 1;
    int sum = 0;
    
    cin >> tc;
    
    for(int i = 0; i<tc; i++)
    {
        cin >> str;
        
        for(int j = 0; j < strlen(str); j++)
        {
            if(str[j] == 'O')
            {
                sum += con;
                con++;
            }
            else
                con = 1;
        }
        cout << sum << endl;
        sum = 0;
        con = 1;
    }

    return 0;
}
