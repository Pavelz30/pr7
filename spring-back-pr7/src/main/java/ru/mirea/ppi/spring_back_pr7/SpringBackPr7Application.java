package ru.mirea.ppi.spring_back_pr7;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication(exclude= {UserDetailsServiceAutoConfiguration.class})
public class SpringBackPr7Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBackPr7Application.class, args);
	}

}
