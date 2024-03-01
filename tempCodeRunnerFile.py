import unittest
from Generate_unit_tests import sum

class TestSum(unittest.TestCase):

    def test_sum_two_positives(self):
        self.assertEqual(sum(2, 3), 5)

    def test_sum_two_negatives(self):
        self.assertEqual(sum(-2, -3), -5)

    def test_sum_positive_negative(self):
        self.assertEqual(sum(2, -3), -1)

    def test_sum_zeroes(self):
        self.assertEqual(sum(0, 0), 0)

TestSum()
