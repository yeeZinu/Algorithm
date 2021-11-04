package algorithm;

import java.util.Scanner;

public class P_10430 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner s = new Scanner(System.in);
		
		int a = s.nextInt();
		int b = s.nextInt();
		int c = s.nextInt();
		
		System.out.println(((a + b) % c) + "\n" +(((a % c) + (b % c)) % c) );
		System.out.println(((a * b) % c) + "\n" +(((a % c) * (b % c)) % c) );
		
	}

}
