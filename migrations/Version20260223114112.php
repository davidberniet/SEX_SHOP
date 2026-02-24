<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260223114112 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE atributo DROP CONSTRAINT fk_e6c7678a7645698e');
        $this->addSql('DROP INDEX idx_e6c7678a7645698e');
        $this->addSql('ALTER TABLE atributo DROP producto_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE atributo ADD producto_id INT NOT NULL');
        $this->addSql('ALTER TABLE atributo ADD CONSTRAINT fk_e6c7678a7645698e FOREIGN KEY (producto_id) REFERENCES producto (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_e6c7678a7645698e ON atributo (producto_id)');
    }
}
