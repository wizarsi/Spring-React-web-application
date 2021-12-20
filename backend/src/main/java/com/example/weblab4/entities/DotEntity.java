package com.example.weblab4.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="entries")

public class DotEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @JsonIgnore
        private Long id;
        @ManyToOne
        @JoinColumn(name = "user_id")
        @JsonIgnore
        private UserEntity userEntity;
        private float x;
        private float y;
        private float r;
        private boolean isEntry = false;

        public DotEntity(float x, float y, float r, boolean isEntry) {
                this.x = x;
                this.y = y;
                this.r = r;
                this.isEntry = isEntry;
        }

        public DotEntity() {

        }
}
