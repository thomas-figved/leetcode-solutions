class Solution:
    def romanToInt(self, s: str) -> int:
        
        correspondances = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        order = ["I", "V", "X", "L", "C", "D", "M"]

        total = 0
        for idx, letter in enumerate(s): 
            if(idx < len(s)-1):
                next_letter = s[idx+1]
                
                if(order.index(next_letter) > order.index(letter)):
                    total -= correspondances[letter] 
                else:
                    total += correspondances[letter]
            else: 
                total += correspondances[letter]
            print(total)
        return total