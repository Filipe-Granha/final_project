class AddCouncilTaxToProperty < ActiveRecord::Migration
  def change
    add_column :properties, :counciltax, :integer
  end
end
