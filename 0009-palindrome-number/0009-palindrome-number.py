class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 :
            return False
        elif x < 10:
            return True
        else:
            pos = []
            while (x != 0):
                pos.append(x % 10)
                x = x // 10

            j = len(pos)-1
            for i in range(len(pos)//2):
                if(pos[i] != pos[j]):
                    return False
                j= j-1

        return True