class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        common = ""

        found = False
        i = 0
        while(not found):
            if(i < len(strs[0])):
                compare = strs[0][i]       
                for word in strs[1::]:
                    if(i < len(word)):
                        if(compare != word[i]):
                            found = True
                    else:
                        found = True                
            else :
                found = True
            i += 1

            if(not found):
                common += compare

        return common