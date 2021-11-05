package algorithm;

import java.util.Scanner;

public class p_14681 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		
		int x = s.nextInt();
		int y = s.nextInt();
		
		/*
		if (x > 0 && y > 0 ) {
			System.out.println("1");
		}
		else if (x < 0 && y > 0 ) {
			System.out.println("2");
		}
		else if (x < 0 && y < 0 ) {
			System.out.println("3");
		}
		else if (x > 0 && y < 0 ) {
			System.out.println("4");
		}
		else {
			System.out.println("0 이외의 숫자를 입력하세요");
		}
		*/
		System.out.println(x > 0 && y > 0 ? "1" : x < 0 && y > 0 ? "2" : x < 0 && y < 0 ? "3" : "4" );

	}

}
