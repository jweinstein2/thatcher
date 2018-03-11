import RPi.GPIO as GPIO
from threading import Timer
from time import sleep
import atexit
import sys, os

def clean():
    print "shutting down..."
    GPIO.cleanup()

atexit.register(clean)
GPIO.setmode(GPIO.BOARD)
chan_list = [3, 5, 7]
GPIO.setup(chan_list, GPIO.OUT)

def main():
    for _ in range(1000):
        GPIO.output(chan_list, GPIO.LOW)
        sleep(3)
        GPIO.output(chan_list, GPIO.HIGH)
        sleep(3)

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print 'Interrupted'
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
