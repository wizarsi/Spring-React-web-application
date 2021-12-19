package com.example.weblab4.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="entries")

public class EntryDotEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "user_id")
        private UserEntity userEntity;
        private float x;
        private float y;
        private float r;
        private boolean isEntry = false;

        @Override
        public String toString() {
                return "CheckedDotResponse{" +
                        "x=" + x +
                        ", y=" + y +
                        ", r=" + r +
                        ", isEntry=" + isEntry +
                        '}';
        }
}
