import math

class Solution:
    units = {
        '0': 'Zero',
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
    }

    special = {
        '10':'Ten',
        '11':'Eleven',
        '12':'Twelve',
        '13':'Thirteen',
        '14':'Fourteen',
        '15':'Fifteen',
        '16':'Sixteen',
        '17':'Seventeen',
        '18':'Eighteen',
        '19':'Nineteen',
    }

    dizaine = {
        '1': 'Ten',
        '2': 'Twenty',
        '3': 'Thirty',
        '4': 'Forty',
        '5': 'Fifty',
        '6': 'Sixty',
        '7': 'Seventy',
        '8': 'Eighty',
        '9': 'Ninety',
    }

    big_num = ["Thousand", "Million", "Billion"]



    def numberToWords(self, num: int) -> str:
        
        str_num = str(num)
        str_length = len(str_num)
        group = math.ceil(str_length / 3)

        result = ""
        
        cut_num = []
        for i in range(group):
            cut_num.append(self.cut_string(str_num, i))

        cut_num.reverse()

        for num in cut_num:

            result += self.process_centaine(num) 

            #print(f"num: {num} {len(num)}")

            if(len(num)>1 and num[-2] == "1"):
                result += self.process_special(num)
            else:
                result += self.process_dizaine(num)

                if( len(num)> 1 and num[-1] == "0"):
                    result += ""
                else:
                    result += self.process_unit(num)    

            if(group >= 2):
                if(num != "000"):
                    result += self.big_num[group - 2] + " "
            group -= 1
            

        result = result[0:-1]
        return result

    def process_centaine(self, num):
        if(len(num)>2 and num[0] != "0"):
            return self.units[num[0]] + " Hundred "
        return ""

    def process_dizaine(self, num):
        if(len(num)>1):
            dizaine = num[-2:]
            #print(f" dizaine for {num} is {dizaine}")

            if dizaine[0] == "0":
                return ""

            if(dizaine[0] != "1"):
                return self.dizaine[dizaine[0]] + " "
        return ""

    def process_special(self, num):
        if(len(num)>1):
            dizaine = num[-2:]
            return self.special[dizaine]+ " "
        return ""

    def process_unit(self, num):
        if(len(num)>0):
            unit = num[-1]
            return self.units[unit]+ " "
        return ""
    

    def cut_string(self, strnum, group_index):

        index_start = 3 * group_index
        index_end = index_start + 3

        #reverse the array
        split = list(strnum.strip(" "))
        split.reverse()

        subarray = []
        subarray = split[index_start:index_end]
        subarray.reverse()

        return ''.join(subarray)
    



