package ru.mirea.ppi.spring_back_pr7.repository;

import ru.mirea.ppi.spring_back_pr7.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory_Id(Long id);
}
