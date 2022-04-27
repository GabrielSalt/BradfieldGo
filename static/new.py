# create a function that returns the nth prime number

def prime(n):
    """
    Return the nth prime number
    """
    primes = [2]
    num = 3
    while len(primes) < n:
        for p in primes:
            if num % p == 0:
                break
        else:
            primes.append(num)
        num += 2
    return primes[-1]

print(1)
print(prime(5000))