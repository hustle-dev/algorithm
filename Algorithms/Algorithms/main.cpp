#include <iostream>
#include <algorithm>
using namespace std;

typedef struct mem
{
    int age;
    string name;
} member;

bool compare(member m1, member m2)
{
    return m1.age < m2.age;
}


int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n;
    
    cin >> n;
    
    member m1[n];
    
    for(int i = 0; i<n; i++)
    {
        cin >> m1[i].age >> m1[i].name;
    }
    stable_sort(m1, m1+n, compare);
    
    for(int i = 0; i<n; i++)
    {
        cout << m1[i].age << ' ' << m1[i].name << '\n';
    }
    
    return 0;
}
