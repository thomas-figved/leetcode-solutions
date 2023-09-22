class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        #naive solution
        max = 0
        search_from = 0
        for letter in s:
            letter_pos = t.find(letter, search_from)

            # print('____')
            # print(letter_pos)
            # print(search_from)

            if letter_pos == -1:
                return False
            elif max > letter_pos:
                return False
            else:
                max = letter_pos
                search_from = letter_pos+1
        return True