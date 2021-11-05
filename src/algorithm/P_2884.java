package algorithm;

import java.util.Scanner;

public class P_2884 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		
		int h = s.nextInt();
		int m = s.nextInt();
		
		if (m < 45) {				// 분이 45보다 작을때
			h--;			
			m = 60 - (45 - m);
			if(h < 0) {				// 시가 0보다 작을때
				h = 23;
			}
			System.out.println(h +" "+ m);
		}
		else {						// 그 외
			System.out.println(h +" "+ (m - 45));
		}
	
	}

}

