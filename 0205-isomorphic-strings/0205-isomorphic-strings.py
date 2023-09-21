class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s)!=len(t):
            return False

        translate_s = {}
        translate_t = {}

        for i in range(len(s)) :
            if(s[i] not in translate_s):
                translate_s[s[i]] = i
            if(t[i] not in translate_t):
                translate_t[t[i]] = i

            if(translate_t[t[i]]) != translate_s[s[i]]:
                return False

        return True